import {IPlayer} from '../../domain/interfaces';
import {
  getPlayerSeasonGamesCount,
  getPlayerSeasonPoints,
  sortPlayersByTotalSeasonPointsDesc,
} from '../../domain/utils';
import {usePlayersStore} from '../../state/players';
interface StandingsProps {
  season: number;
}

export function Standings(props: StandingsProps) {
  const players = usePlayersStore.getState().players;
  const sortedPlayers = sortPlayersByTotalSeasonPointsDesc(props.season, players);

  return (
    <div className="flex flex-col border-slate-200 border rounded-md shadow-lg">
      <div className="grid grid-cols-standings gap-4 bg-slate-800 p-4 rounded-t-md">
        <div className="font-bold uppercase text-white text-sm">POS</div>
        <div className="font-bold uppercase text-white text-sm">PLAYER</div>
        <div className="font-bold uppercase text-white text-sm">GAMES</div>
        <div className="font-bold uppercase text-white text-sm text-right">POINTS</div>
      </div>
      <div className="flex flex-col">
        {sortedPlayers.map((player: IPlayer, index) => (
          <div key={player.id} className="grid grid-cols-standings gap-4 border-b">
            <div className="font-bold text-sm border-l-4 border-l-amber-500 p-2 pl-4">
              {index + 1}
            </div>
            <div className="text-xs font-bold p-2">{player.nickname}</div>
            <div className="text-xs p-2">{getPlayerSeasonGamesCount(props.season, player.id)}</div>
            <div className="text-sm p-2 text-right pr-8">
              {getPlayerSeasonPoints(props.season, player.id)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
