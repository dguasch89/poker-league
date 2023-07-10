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
    const actual = getPlayerSeasonPoints(season, 1);
    expect(actual).toEqual(128);
    const actual2 = getPlayerSeasonPoints(season, 2);
    expect(actual2).toEqual(159);
    const actual3 = getPlayerSeasonPoints(season, 3);
    expect(actual3).toEqual(31);
    const actual4 = getPlayerSeasonPoints(season, 4);
    expect(actual4).toEqual(102);
    const actual5 = getPlayerSeasonPoints(season, 5);
    expect(actual5).toEqual(58);
    const actual6 = getPlayerSeasonPoints(season, 6);
    expect(actual6).toEqual(93);
    const actual7 = getPlayerSeasonPoints(season, 7);
    expect(actual7).toEqual(165);
    const actual8 = getPlayerSeasonPoints(season, 8);
    expect(actual8).toEqual(85);
    const actual9 = getPlayerSeasonPoints(season, 9);
    expect(actual9).toEqual(22);
    const actual10 = getPlayerSeasonPoints(season, 10);
    expect(actual10).toEqual(86);
    const actual11 = getPlayerSeasonPoints(season, 11);
    expect(actual11).toEqual(30);
    const actual12 = getPlayerSeasonPoints(season, 12);
    expect(actual12).toEqual(79);
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
