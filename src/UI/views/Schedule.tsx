import { format } from "date-fns";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import isPast from "date-fns/isPast";
import goldMedal from "../assets/gold_medal.png";
import { IGameSchedule, IPlayer, IWinner } from "../../domain/interfaces";
import { appendOrdinal, createGames, getWinner } from "../utils/game-schedule";
import { useWinnersStore } from "../../state/winners";
import { usePlayersStore } from "../../state/players";

export function Schedule() {
  const winners: IWinner[] = useWinnersStore.getState().winners;
  const players: IPlayer[] = usePlayersStore.getState().players;
  const games: IGameSchedule[] = [
    {
      position: 1,
      date: format(new Date(2023, 1, 23), "MM / dd / yyyy"),
      hour: "21:30",
      winner: 1,
    },
  ];
  createGames(games, winners);

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
            className="grid gap-4 grid-cols-schedule justify-center items-center rounded-lg h-20 w-4/5 m-2 transform 
                                transition duration-500 hover:scale-110 cursor-pointer border-4 border-orange-500	 text-2xl font-bold text-white bg-slate-800"
          >
            <span className="p-1 text-center border-r">
              {appendOrdinal(g.position)}
            </span>
            <span className="p-1 text-center">
              {format(new Date(g.date), "do 'of' MMMM")}
            </span>
            <span className="p-1 pr-4 text-center border-r">{g.hour}</span>
            <span className="flex p-1">
              {isPast(new Date(g.date)) ? (
                <div className="flex justify-center items-center">
                  <img src={goldMedal} className="w-12" alt="gold-medal" />
                  <span>{getWinner(g.winner, players)}</span>
                </div>
              ) : (
                <>
                  <span>Starts in: </span>
                  <span className="pl-2 text-green-500">
                    {formatDistanceToNow(new Date(g.date))}
                  </span>
                </>
              )}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
