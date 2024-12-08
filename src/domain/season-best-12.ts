import {ISeasonSettings, TPointsByPosition} from './interfaces';

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
} as TPointsByPosition;

export const seasonSettings = {
  lastGame: 15,
  lastGameMultiplier: 2,
  pointsByPosition: pointsByPositionSeasonBest12,
  bestGames: 12,
} as ISeasonSettings;
