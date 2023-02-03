export const isInvalidPlayer = (playerId: number) => {
  return playerId === null || playerId === undefined || playerId < 0 || typeof playerId != 'number';
};
