import { addDays, format } from "date-fns";
import { IGameSchedule } from "../../domain/interfaces";

export const appendOrdinal = (gameNumber: string) => {
  let day = gameNumber;
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

export const createGames = (games: IGameSchedule[]) => {
  for (let i = 2; i < 11; i++) {
    games.push({
      position: appendOrdinal(`${i}`),
      date: format(new Date(getNextGameDate(i, games)), "MM / dd / yyyy"),
      hour: "21:30",
      winner: "",
    });
  }
};
