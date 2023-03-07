import { IPlayer, ISeason } from "./interfaces";

export const isInvalidPlayer = (playerId: number) => {
  return (
    playerId === null ||
    playerId === undefined ||
    playerId < 0 ||
    typeof playerId != "number"
  );
};

export const getPlayerNickName = (playerId: any, players: IPlayer[]) => {
  if (playerId) {
    const playerNickName = players.find((p) => p.id === playerId);
    return playerNickName?.nickname;
  }
};

export const getGameWinner = (
  id: number,
  seasonId: number,
  players: IPlayer[],
  seasons: ISeason[]
) => {
  const winnerId = seasons[seasonId - 1]?.games?.find((game) => game.id === id)
    ?.standings[0];

  return getPlayerNickName(winnerId, players);
};
