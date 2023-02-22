import {IPlayer} from './interfaces';

export const isInvalidPlayer = (playerId: number) => {
  return playerId === null || playerId === undefined || playerId < 0 || typeof playerId != 'number';
};

export const getPlayerNickName = (playerId: number, players: IPlayer[]) => {
  if (playerId) {
    const winner = players.find(p => p.id === playerId);
    return winner?.nickname;
  }
};
