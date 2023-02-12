import { addDays, format } from "date-fns";
import { IGameSchedule, IPlayer, IWinner } from "../../domain/interfaces";

export const appendOrdinal = (gameNumber: number) => {
  let day = gameNumber.toString();
  if (day === "2") {
    return (day = `${gameNumber}nd`);
  } else if (day === "3") {
    return (day = `${gameNumber}rd`);
  } else {
    return (day = `${gameNumber}th`);
  }
};

export const getNextGameDate = (gameNumber: number, games: IGameSchedule[]) => {
  const nextGameDate = addDays(new Date(games[gameNumber - 2].date), 14);
  return nextGameDate;
};

export const createGames = (games: IGameSchedule[], winners: IWinner[]) => {
  for (let i = 2; i < 11; i++) {
    games.push({
      position: i,
      date: format(new Date(getNextGameDate(i, games)), "MM / dd / yyyy"),
      hour: "21:30",
      winner: winners[i]?.id,
    });
  }
};

export const getWinner = (winnerId: number, players: IPlayer[]) => {
  if (winnerId) {
    const winner = players.find((p) => p.id === winnerId);
    return winner?.nickname;
  }
};
