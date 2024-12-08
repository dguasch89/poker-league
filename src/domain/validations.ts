import {IGame, ISeason} from './interfaces';
import {isInvalidPlayer} from './player';

export const validatePlayer = (playerId: number) => {
  if (isInvalidPlayer(playerId))
    throw new Error('Invalid playerId. Must be defined and a number greater than or equal to');
};

export const validateSeason = (season: ISeason) => {
  if (!season) throw new Error('Season must be defined');
};

export const validateGame = (game: IGame) => {
  if (!game?.standings) throw new Error('Game must be defined');
};
