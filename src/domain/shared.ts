import {IGame, IHandicap, IKO, ISeason, TPointsByPosition} from './interfaces';
import {isInvalidPlayer} from './player';

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
    return season.handicaps.find((h: IHandicap) => h.playerId === playerId)?.points || 0;
  }
};
