import {test, expect} from '@playwright/test';
import {getPlayerSeasonPoints} from '../../src/domain/season.js';

test.describe('Player season points', () => {
  const season = {
    id: 1,
    description: 'Season 1',
    games: [
      {
        id: 1,
        description: 'Game 1',
        standings: [3, 2, 1, 5, 6, 7, 8, 13, 9, 4],
      },
      {
        id: 2,
        description: 'Game 2',
        standings: [2, 5, 7, 9, 1, 4, 3, 6],
      },
      {
        id: 3,
        description: 'Game 3',
        standings: [4, 6, 1, 7, 2, 10, 5],
      },
      {
        id: 4,
        description: 'Game 4',
        standings: [7, 10, 4, 1, 6, 9, 8, 2],
      },
      {
        id: 5,
        description: 'Game 5',
        standings: [8, 1, 7, 12, 11, 4, 5],
      },
      {
        id: 6,
        description: 'Game 6',
        standings: [7, 1, 6, 4, 8, 12, 2],
      },
      {
        id: 7,
        description: 'Game 7',
        standings: [10, 4, 2, 7, 6, 5, 1, 12, 8],
      },
      {
        id: 8,
        description: 'Game 8',
        standings: [2, 8, 7, 4, 1, 11],
      },
      {
        id: 9,
        description: 'Game 9',
        standings: [12, 8, 10, 11, 6, 5, 2, 4, 7, 1],
      },
      {
        id: 10,
        description: 'Game 10',
        standings: [2, 7, 12, 1, 10, 6],
      },
    ],
  };
  const notPlayedSeason = {
    id: 1,
    description: 'Season 1',
    games: [],
  };
  test('should calculate season player points according positions in all season games', () => {
    const actual = getPlayerSeasonPoints(season, 5);
    expect(actual).toEqual(58);
    const actual2 = getPlayerSeasonPoints(season, 1);
    expect(actual2).toEqual(128);
  });
  test('should be 0 points if player has not participated in any game', () => {
    const actual = getPlayerSeasonPoints(season, 14);
    expect(actual).toEqual(0);
  });
  test('should be 0 points if season has 0 games', () => {
    const actual = getPlayerSeasonPoints(notPlayedSeason, 1);
    expect(actual).toEqual(0);
  });
  test('should throw and error if season is invalid', () => {
    expect(() => {
      getPlayerSeasonPoints(undefined, 1);
    }).toThrow();
    expect(() => {
      getPlayerSeasonPoints(null, 1);
    }).toThrow();
  });
  test('should throw and error if player is invalid', () => {
    expect(() => {
      getPlayerSeasonPoints(season, undefined);
    }).toThrow();
    expect(() => {
      getPlayerSeasonPoints(season, null);
    }).toThrow();
    expect(() => {
      getPlayerSeasonPoints(season, '1');
    }).toThrow();
  });
});
