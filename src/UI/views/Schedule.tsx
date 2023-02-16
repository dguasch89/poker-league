import { format, formatDistanceToNowStrict } from "date-fns";
import isPast from "date-fns/isPast";
import goldMedal from "../assets/gold_medal.png";
import { IGameSchedule, IPlayer } from "../../domain/interfaces";
import { appendOrdinal, getWinner } from "../utils/game-schedule-utils";
import { usePlayersStore } from "../../state/players";
import { useGamesScheduleStore } from "../../state/games-schedule";

export function Schedule() {
  const gamesSchedule: IGameSchedule[] =
    useGamesScheduleStore.getState().gamesSchedule;
  const players: IPlayer[] = usePlayersStore.getState().players;

  return (
    <>
      <div className="banner flex flex-col gap-2 items-center justify-items-center bg-indigo-900 p-5">
        <h2 className="font-bold text-center text-2xl text-white italic ">
          Season 2 schedule
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center w-full py-4 px-1">
        {gamesSchedule.map((g) => (
          <div
            key={g.id}
            className="grid gap-0 sm:gap-4 grid-cols-schedule justify-center items-center rounded-lg m-2 transform 
                                transition duration-500 hover:scale-110 cursor-pointer border-4 border-orange-500 text-sm sm:text-2xl font-bold text-white bg-slate-800"
          >
            <span className="text-center border-r">{appendOrdinal(g.id)}</span>
            <span className="p-1 text-center">
              {format(new Date(g.date), "do 'of' MMMM")}
            </span>
            <span className="pr-2 text-center border-r">{g.hour}</span>
            <div className="flex p-1 sm:pl-4">
              {isPast(new Date(g.date)) ? (
                <div className="flex justify-center items-center">
                  <img src={goldMedal} className="w-12" alt="gold-medal" />
                  <span>{getWinner(g.winner, players)}</span>
                </div>
              ) : (
                <div>
                  <span>Starts in: </span>
                  <span className="pl-1 text-green-500">
                    {formatDistanceToNowStrict(new Date(g.date))}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
