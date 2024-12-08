import {IGame, IPlayer, ISeason} from './interfaces.js';
import {
  getPlayerGameKos,
  getPlayerGamePosition,
  getPlayerSeasonGamesCount,
  getPlayerSeasonHandicap,
  getPointsByPosition,
} from './shared.js';
import {maxBy, sortBy} from './util.js';
import {validateGame, validatePlayer, validateSeason} from './validations.js';

export const pointsByPositionSeasonBest10 = {
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

const isLastGame = (game: IGame) => game.id === 12;

export const getPlayerGamePoints = (game: IGame, playerId: number): number => {
  validatePlayer(playerId);
  validateGame(game);
  const position = getPlayerGamePosition(game, playerId);
  if (!position) return 0;
  const pointsByPosition = getPointsByPosition(
    game.standings.length,
    position,
    pointsByPositionSeasonBest10
  );
  const kos = getPlayerGameKos(game, playerId);
  return isLastGame(game) ? pointsByPosition * 1.5 + kos : pointsByPosition + kos;
};

export const getPlayerSeasonPoints = (season: ISeason, playerId: number) => {
  validatePlayer(playerId);
  validateSeason(season);
  const totalPoints = season?.games.reduce((acc: number, curr: IGame) => {
    const points = getPlayerGamePoints(curr, playerId);
    return (acc += points);
  }, 0);
  return totalPoints || 0;
};

export const getPlayerSeasonBest10PointsWithHandicap = (season: ISeason, playerId: number) => {
  validatePlayer(playerId);
  validateSeason(season);
  const gamePointsArray = season?.games.map((game: IGame) => getPlayerGamePoints(game, playerId));
  const sortedGamePointsArray = gamePointsArray.sort((a, b) => b - a);
  const best10Games = sortedGamePointsArray.slice(0, 10);
  const best10GamesPoints = best10Games?.reduce((acc, curr) => (acc += curr), 0) || 0;
  const handicapPoints = getPlayerSeasonHandicap(season, playerId);
  return best10GamesPoints + handicapPoints;
};

export const getPlayerSeasonPointsPerGamePercentage = (season: ISeason, playerId: number): any => {
  const totalSeasonPoints = getPlayerSeasonPoints(season, playerId);
  const totalSeasonGames = getPlayerSeasonGamesCount(season, playerId);
  return totalSeasonGames > 0 ? (totalSeasonPoints / totalSeasonGames).toFixed(2) : 0;
};

export const sortPlayersByTotalSeasonPointsDesc = (season: ISeason, players: IPlayer[]) => {
  return sortBy(players, p => getPlayerSeasonBest10PointsWithHandicap(season, p.id), 'desc');
};

export const getBestSeasonPlayers = (players: IPlayer[], season: ISeason) => {
  const sortedPlayers = sortPlayersByTotalSeasonPointsDesc(season, players);
  return sortedPlayers.slice(0, 3);
};

export const getBestPointsPerGamePercentagePlayer = (season: ISeason, players: IPlayer[]) => {
  return maxBy(players, p => Number(getPlayerSeasonPointsPerGamePercentage(season, p.id)));
};
