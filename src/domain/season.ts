import {IGame, IPlayer, ISeason} from './interfaces';
import {getPlayerGamePosition, getPlayerSeasonGamesCount} from './shared';
import {maxBy, sortBy} from './util.js';
import {validateGame, validatePlayer, validateSeason} from './validations';
const pointsByPosition = new Map([
  [1, 25],
  [2, 18],
  [3, 15],
  [4, 12],
  [5, 10],
  [6, 8],
  [7, 6],
  [8, 4],
  [9, 2],
]);

const isLastGame = (game: IGame) => game.id === 10;

export const getPlayerGamePoints = (game: IGame, playerId: number): number => {
  validatePlayer(playerId);
  validateGame(game);
  const position = getPlayerGamePosition(game, playerId);
  if (!position) return 0;
  return pointsByPosition.get(position) || 0;
};

export const getPlayerSeasonPoints = (season: ISeason, playerId: number) => {
  validatePlayer(playerId);
  validateSeason(season);
  const totalPoints = season?.games.reduce((acc: number, curr: IGame) => {
    const points = getPlayerGamePoints(curr, playerId);
    return (acc += isLastGame(curr) ? points * 2 : points);
  }, 0);
  return totalPoints || 0;
};

export const getPlayerSeasonPointsPerGamePercentage = (season: ISeason, playerId: number): any => {
  const totalSeasonPoints = getPlayerSeasonPoints(season, playerId);
  const totalSeasonGames = getPlayerSeasonGamesCount(season, playerId);
  return totalSeasonGames > 0 ? (totalSeasonPoints / totalSeasonGames).toFixed(2) : 0;
};

export const sortPlayersByTotalSeasonPointsDesc = (season: ISeason, players: IPlayer[]) => {
  return sortBy(players, p => getPlayerSeasonPoints(season, p.id), 'desc');
};

export const getBestSeasonPlayers = (players: IPlayer[], season: ISeason) => {
  const sortedPlayers = sortPlayersByTotalSeasonPointsDesc(season, players);
  return sortedPlayers.slice(0, 3);
};

export const getBestPointsPerGamePercentagePlayer = (season: ISeason, players: IPlayer[]) => {
  return maxBy(players, p => Number(getPlayerSeasonPointsPerGamePercentage(season, p.id)));
};

export const isSeasonFinalized = (season: ISeason) => {
  return season.id === 4
    ? season.games.length === 15
    : season.id === 5
    ? season.games.length === 12
    : season.games.length === 10;
};
