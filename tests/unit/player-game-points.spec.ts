import {test, expect} from '@playwright/test';
import {getPlayerGamePoints} from '../../src/domain/season.js';

test.describe('Player game points', () => {
  const game = {
    id: 1,
    description: 'Game 1',
    standings: [3, 2, 1, 5, 6, 7, 8, 13, 9, 4],
  };
  const notPlayedGame = {
    id: 1,
    description: 'Game 1',
    standings: [],
  };
  test('should calculate player points according position in game', () => {
    const actual = getPlayerGamePoints(game, 5);
    expect(actual).toEqual(12);
  });
  test('should be 0 points if player has not played game', () => {
    const actual = getPlayerGamePoints(game, 14);
    expect(actual).toEqual(0);
  });
  test('should be 0 points if game has not played', () => {
    const actual = getPlayerGamePoints(notPlayedGame, 1);
    expect(actual).toEqual(0);
  });
  test('should throw an error if game is invalid', () => {
    expect(() => {
      getPlayerGamePoints(null, 1);
    }).toThrow();
    expect(() => {
      getPlayerGamePoints(undefined, 1);
    }).toThrow();
  });
  test('should throw and error if player is invalid', () => {
    expect(() => {
      getPlayerGamePoints(game, undefined);
    }).toThrow();
    expect(() => {
      getPlayerGamePoints(game, null);
    }).toThrow();
    expect(() => {
      getPlayerGamePoints(game, '1');
    }).toThrow();
  });
});
