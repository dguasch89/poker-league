import {IGame, IHandicap, IKO, IPlayer, ISeason} from './interfaces';
import {isInvalidPlayer} from './player.js';
import {getPlayerSeasonGamesCount} from './season.js';
import {sortBy, maxBy} from './util.js';

export const pointsByPositionSeasonBest12 = {
  4: {1: 18, 2: 15, 3: 10, 4: 7},
  5: {1: 20, 2: 16, 3: 11, 4: 9, 5: 4},
  6: {1: 21, 2: 17, 3: 12, 4: 10, 5: 7, 6: 3},
  7: {1: 23, 2: 18, 3: 13, 4: 11, 5: 8, 6: 4, 7: 2},
  8: {1: 25, 2: 19, 3: 14, 4: 12, 5: 9, 6: 5, 7: 4, 8: 2},
  9: {1: 26, 2: 20, 3: 15, 4: 12, 5: 10, 6: 8, 7: 6, 8: 4, 9: 2},
  10: {1: 27, 2: 21, 3: 16, 4: 13, 5: 11, 6: 9, 7: 7, 8: 5, 9: 3, 10: 0},
  11: {1: 29, 2: 22, 3: 17, 4: 14, 5: 12, 6: 10, 7: 8, 8: 6, 9: 4, 10: 0, 11: 0},
  12: {1: 31, 2: 23, 3: 18, 4: 15, 5: 13, 6: 11, 7: 9, 8: 7, 9: 5, 10: 0, 11: 0, 12: 0},
};

const isLastGame = (game: IGame) => game.id === 15;

export const getPointsByPosition = (playersCount: number, position: number) => {
  return (pointsByPositionSeasonBest12 as any)[playersCount][position] || 0;
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

export const getPlayerTotalSeasonKos = (season: ISeason, playerId: number) => {
  return season.games.reduce((prev, curr) => {
    return (curr.kos.find(k => k.playerId === playerId)?.count || 0) + prev;
  }, 0);
};

export const getPlayerGamePoints = (game: IGame, playerId: number): number => {
  if (!game?.standings) {
    throw new Error('Game must be defined');
  } else if (isInvalidPlayer(playerId)) {
    throw new Error('Invalid playerId. Must be defined and a number greater than or equal to');
  } else {
    const index = game.standings.findIndex((id: number) => id === playerId);
    const position = index != -1 ? index + 1 : 0;
    const pointsByPosition = getPointsByPosition(game.standings.length, position);
    const kos = getPlayerGameKos(game, playerId);
    return pointsByPosition + kos;
  }
};

export const getPlayerGamePosition = (game: IGame, playerId: number): number => {
  if (!game?.standings) {
    throw new Error('Game must be defined');
  } else if (isInvalidPlayer(playerId)) {
    throw new Error('Invalid playerId. Must be defined and a number greater than or equal to');
  } else {
    const index = game.standings.findIndex((id: number) => id === playerId);
    const position = index != -1 ? index + 1 : 0;
    return position;
  }
};

export const getPlayerSeasonPoints = (season: ISeason, playerId: number) => {
  if (isInvalidPlayer(playerId)) {
    throw new Error('Invalid playerId. Must be defined and a number greater than or equal to');
  } else if (!season) {
    throw new Error('Season must be defined');
  } else {
    const totalPoints = season?.games.reduce((acc: number, curr: IGame) => {
      const points = getPlayerGamePoints(curr, playerId);
      return (acc += isLastGame(curr) ? points * 2 : points);
    }, 0);
    return totalPoints || 0;
  }
};

export const getPlayerSeasonHandicap = (season: ISeason, playerId: number) => {
  if (isInvalidPlayer(playerId)) {
    throw new Error('Invalid playerId. Must be defined and a number greater than or equal to');
  } else if (!season) {
    throw new Error('Season must be defined');
  } else {
    return season.handicaps.find((h: IHandicap) => h.playerId === playerId)?.points || 0;
  }
};

export const getPlayerSeasonBest12PointsWithHandicap = (season: ISeason, playerId: number) => {
  if (isInvalidPlayer(playerId)) {
    throw new Error('Invalid playerId. Must be defined and a number greater than or equal to');
  } else if (!season) {
    throw new Error('Season must be defined');
  } else {
    const gamePointsArray = season?.games.map((game: IGame) => getPlayerGamePoints(game, playerId));
    const sortedGamePointsArray = gamePointsArray.sort((a, b) => b - a);
    const best12Games = sortedGamePointsArray.slice(0, 12);
    const best12GamesPoints = best12Games?.reduce((acc, curr) => (acc += curr), 0) || 0;
    const handicapPoints = getPlayerSeasonHandicap(season, playerId);
    return best12GamesPoints + handicapPoints;
  }
};

export const getPlayerSeasonPointsPerGamePercentage = (season: ISeason, playerId: number): any => {
  const totalSeasonPoints = getPlayerSeasonPoints(season, playerId);
  const totalSeasonGames = getPlayerSeasonGamesCount(season, playerId);
  return totalSeasonGames > 0 ? (totalSeasonPoints / totalSeasonGames).toFixed(2) : 0;
};

export const sortPlayersByTotalSeasonPointsDesc = (season: ISeason, players: IPlayer[]) => {
  return sortBy(players, p => getPlayerSeasonBest12PointsWithHandicap(season, p.id), 'desc');
};

export const getBestSeasonPlayers = (players: IPlayer[], season: ISeason) => {
  const sortedPlayers = sortPlayersByTotalSeasonPointsDesc(season, players);
  return sortedPlayers.slice(0, 3);
};

export const getBestPointsPerGamePercentagePlayer = (season: ISeason, players: IPlayer[]) => {
  return maxBy(players, p => Number(getPlayerSeasonPointsPerGamePercentage(season, p.id)));
};
