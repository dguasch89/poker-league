import { format } from "date-fns";
import goldMedal from "../assets/gold_medal.png";
import { IGameSchedule } from "../../domain/interfaces";
import { appendOrdinal, createGames } from "../utils/game-schedule";

export function Schedule() {
  const games: IGameSchedule[] = [
    {
      position: appendOrdinal("1"),
      date: format(new Date(2023, 1, 23), "MM / dd / yyyy"),
      hour: "21:30",
      winner: "",
    },
  ];
  createGames(games);

  return (
    <>
      <div className="banner flex flex-col gap-2 items-center justify-items-center bg-indigo-900 p-5">
        <h2 className="font-bold text-center text-2xl text-white italic ">
          Season 2 schedule is awesome
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center w-full p-4">
        {games.map((g) => (
          <div
            key={g.position}
            className="grid gap-4 grid-cols-schedule justify-center items-center rounded-lg h-20 w-4/5 m-4 text-2xl text-white bg-slate-800"
          >
            <span className="p-1 text-center border-r">{g.position}</span>
            <span className="p-1 text-center">
              {format(new Date(g.date), "EEEE - do 'of' MMMM")}
            </span>
            <span className="p-1 pr-4 text-center border-r">{g.hour}</span>
            <span className="p-1">
              <img src={goldMedal} className="w-12" alt="gold-medal" />
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
