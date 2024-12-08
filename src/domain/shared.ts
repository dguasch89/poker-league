import {
  IGame,
  IHandicap,
  IKO,
  IPlayer,
  ISeason,
  ISeasonSettings,
  TPointsByPosition,
} from './interfaces';
import {isInvalidPlayer} from './player';
import {maxBy, sortBy} from './util';
import {validateGame, validatePlayer, validateSeason} from './validations';

export const getPointsByPosition = (
  playersCount: number,
  position: number,
  pointsSystem: TPointsByPosition
) => {
  return pointsSystem[playersCount][position];
};

export const getPlayerTotalSeasonKos = (season: ISeason, playerId: number) => {
  return season.games.reduce((prev, curr) => {
    return (curr.kos.find(k => k.playerId === playerId)?.count || 0) + prev;
  }, 0);
};

export const getPlayerGameKos = (game: IGame, playerId: number): number => {
  if (!game?.standings) {
    throw new Error('Game must be defined');
  } else if (isInvalidPlayer(playerId)) {
    throw new Error('Invalid playerId. Must be defined and a number greater than or equal to');
  } else {
    return game.kos?.find((ko: IKO) => ko.playerId === playerId)?.count || 0;
  }
};

export const getPlayerGamePosition = (game: IGame, playerId: number): number | null => {
  if (!game?.standings) {
    throw new Error('Game must be defined');
  } else if (isInvalidPlayer(playerId)) {
    throw new Error('Invalid playerId. Must be defined and a number greater than or equal to');
  } else {
    const index = game.standings.findIndex((id: number) => id === playerId);
    const position = index != -1 ? index + 1 : null;
    return position;
  }
};

export const getPlayerSeasonGamesCount = (season: ISeason, playerId: number) => {
  const totalGames = season?.games.reduce((acc: number, curr: IGame) => {
    const index = curr.standings.findIndex(id => id === playerId);
    return (acc += index != -1 ? 1 : 0);
  }, 0);
  return totalGames || 0;
};

export const getPlayerSeasonHandicap = (season: ISeason, playerId: number) => {
  if (isInvalidPlayer(playerId)) {
    throw new Error('Invalid playerId. Must be defined and a number greater than or equal to');
  } else if (!season) {
    throw new Error('Season must be defined');
  } else {
    return season.handicaps?.find((h: IHandicap) => h.playerId === playerId)?.points || 0;
  }
};

export const getPlayerGamePoints = (
  game: IGame,
  playerId: number,
  seasonSettings: ISeasonSettings
): number => {
  validatePlayer(playerId);
  validateGame(game);
  const position = getPlayerGamePosition(game, playerId);
  if (!position) return 0;
  const pointsByPosition = getPointsByPosition(
    game.standings.length,
    position,
    seasonSettings.pointsByPosition
  );
  const kos = getPlayerGameKos(game, playerId);
  return game.id === seasonSettings.lastGame
    ? (pointsByPosition + kos) * seasonSettings.lastGameMultiplier
    : pointsByPosition + kos;
};

export const getPlayerSeasonPoints = (
  season: ISeason,
  playerId: number,
  seasonSettings: ISeasonSettings
) => {
  validatePlayer(playerId);
  validateSeason(season);
  const totalPoints = season?.games.reduce((acc: number, curr: IGame) => {
    const points = getPlayerGamePoints(curr, playerId, seasonSettings);
    return (acc += points);
  }, 0);
  return totalPoints || 0;
};

export const getPlayerSeasonBestGamesPointsWithHandicap = (
  season: ISeason,
  playerId: number,
  seasonSettings: ISeasonSettings
) => {
  validatePlayer(playerId);
  validateSeason(season);
  const gamePointsArray = season?.games.map((game: IGame) =>
    getPlayerGamePoints(game, playerId, seasonSettings)
  );
  const sortedGamePointsArray = gamePointsArray.sort((a, b) => b - a);
  const best12Games = sortedGamePointsArray.slice(0, seasonSettings.bestGames);
  const best12GamesPoints = best12Games?.reduce((acc, curr) => (acc += curr), 0) || 0;
  const handicapPoints = getPlayerSeasonHandicap(season, playerId);
  return best12GamesPoints + handicapPoints;
};

export const sortPlayersByTotalSeasonPointsDesc = (
  season: ISeason,
  players: IPlayer[],
  settings: ISeasonSettings
) => {
  return sortBy(
    players,
    p => getPlayerSeasonBestGamesPointsWithHandicap(season, p.id, settings),
    'desc'
  );
};

export const getPlayerSeasonPointsPerGamePercentage = (
  season: ISeason,
  playerId: number,
  seasonSettings: ISeasonSettings
): any => {
  const totalSeasonPoints = getPlayerSeasonPoints(season, playerId, seasonSettings);
  const totalSeasonGames = getPlayerSeasonGamesCount(season, playerId);
  return totalSeasonGames > 0 ? (totalSeasonPoints / totalSeasonGames).toFixed(2) : 0;
};

export const getBestSeasonPlayers = (
  players: IPlayer[],
  season: ISeason,
  seasonSettings: ISeasonSettings
) => {
  const sortedPlayers = sortPlayersByTotalSeasonPointsDesc(season, players, seasonSettings);
  return sortedPlayers.slice(0, 3);
};

export const getBestPointsPerGamePercentagePlayer = (
  season: ISeason,
  players: IPlayer[],
  seasonSettings: ISeasonSettings
) => {
  return maxBy(players, p =>
    Number(getPlayerSeasonPointsPerGamePercentage(season, p.id, seasonSettings))
  );
};
