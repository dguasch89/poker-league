import {ISeason, ISeasonSettings, TPointsByPosition} from './interfaces';

export const pointsByPosition = {
  4: {1: 25, 2: 18, 3: 15, 4: 12},
  5: {1: 25, 2: 18, 3: 15, 4: 12, 5: 10},
  6: {1: 25, 2: 18, 3: 15, 4: 12, 5: 10, 6: 8},
  7: {1: 25, 2: 18, 3: 15, 4: 12, 5: 10, 6: 8, 7: 6},
  8: {1: 25, 2: 18, 3: 15, 4: 12, 5: 10, 6: 8, 7: 6, 8: 4},
  9: {1: 25, 2: 18, 3: 15, 4: 12, 5: 10, 6: 8, 7: 6, 8: 4, 9: 2},
  10: {1: 25, 2: 18, 3: 15, 4: 12, 5: 10, 6: 8, 7: 6, 8: 4, 9: 2, 10: 0},
  11: {1: 25, 2: 18, 3: 15, 4: 12, 5: 10, 6: 8, 7: 6, 8: 4, 9: 2, 10: 0, 11: 0},
  12: {1: 25, 2: 18, 3: 15, 4: 12, 5: 10, 6: 8, 7: 6, 8: 4, 9: 2, 10: 0, 11: 0, 12: 0},
} as TPointsByPosition;

export const seasonSettings = {
  lastGame: 10,
  lastGameMultiplier: 2,
  pointsByPosition: pointsByPosition,
  bestGames: 10,
} as ISeasonSettings;

export const isSeasonFinalized = (season: ISeason) => {
  return season.id === 4
    ? season.games.length === 15
    : season.id === 5
    ? season.games.length === 12
    : season.games.length === 10;
};
