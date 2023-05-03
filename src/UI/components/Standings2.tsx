import {IPlayer, ISeason} from '../../domain/interfaces';
import {getPlayerSeasonGamesCount} from '../../domain/season';
import {
  getPlayerSeasonPoints,
  getPlayerSeasonPointsMinusWorstTwo,
  getPlayerSeasonPointsPerGamePercentage,
  sortPlayersByTotalSeasonPointsDesc,
} from '../../domain/season2';
import {usePlayersStore} from '../../state/players';
interface StandingsProps {
  season: ISeason;
}

export function Standings2(props: StandingsProps) {
  const players = usePlayersStore.getState().players;
  const sortedPlayers = sortPlayersByTotalSeasonPointsDesc(props.season, players);

  return (
    <div className="flex flex-col border-slate-200 border rounded-md shadow-lg">
      <div className="grid grid-cols-standings gap-4 bg-slate-800 rounded-t-md">
        <div className="font-bold uppercase text-white text-xs sm:text-sm pt-4 pb-4 pl-4">POS</div>
        <div className="font-bold uppercase text-white text-xs sm:text-sm pt-4 pb-4">PLAYER</div>
        <div className="font-bold uppercase text-white text-xs sm:text-sm text-right pt-4 pb-4">
          %P/G
        </div>
        <div className="font-bold uppercase text-white text-xs sm:text-sm text-right pt-4 pb-4">
          GAMES
        </div>
        <div className="font-bold uppercase text-white text-xs sm:text-sm text-right pt-4 pb-4 pr-4">
          VIRTUAL POINTS
        </div>
        <div className="font-bold uppercase text-white text-xs sm:text-sm text-right pt-4 pb-4 pr-4">
          POINTS
        </div>
      </div>
      <div className="flex flex-col">
        {sortedPlayers.map((player: IPlayer, index) => (
          <div
            key={player.id}
            className="grid grid-cols-standings gap-4 border-b items-center first-of-type:bg-green-50 last-of-type:bg-red-50"
          >
            <div className="font-bold text-sm border-l-4 border-l-amber-500 p-2 pl-4">
              {index + 1}
            </div>
            <div className="text-xs font-bold">{player.nickname}</div>
            <div className="text-xs text-right">
              {getPlayerSeasonPointsPerGamePercentage(props.season, player.id)}
            </div>
            <div className="text-xs p-2 text-right">
              {getPlayerSeasonGamesCount(props.season, player.id)}
            </div>
            <div className="font-bold text-sm text-amber-500 text-right pr-4">
              {getPlayerSeasonPointsMinusWorstTwo(props.season, player.id)}
            </div>
            <div className="font-bold text-sm text-indigo-800 text-right pr-4">
              {getPlayerSeasonPoints(props.season, player.id)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
