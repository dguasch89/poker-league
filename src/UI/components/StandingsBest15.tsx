import {IPlayer, StandingsProps} from '../../domain/interfaces';
import {
  getPlayerSeasonBestGamesPointsWithHandicap,
  getPlayerSeasonGamesCount,
  getPlayerSeasonPoints,
  getPlayerSeasonPointsPerGamePercentage,
  getPlayerTotalSeasonKos,
  sortPlayersByTotalSeasonPointsDesc,
} from '../../domain/shared';
import {usePlayersStore} from '../../state/players';

export function StandingsBest15(props: StandingsProps) {
  const players = usePlayersStore.getState().players;
  const sortedPlayers = sortPlayersByTotalSeasonPointsDesc(props.season, players);

  return (
    <div className="flex flex-col border-slate-200 border rounded-md shadow-lg">
      <div className="grid grid-cols-standings7 gap-4 bg-slate-800 rounded-t-md">
        <div className="font-bold uppercase text-white text-xs sm:text-sm pt-4 pb-4 pl-4 truncate">
          POS
        </div>
        <div className="font-bold uppercase text-white text-xs sm:text-sm pt-4 pb-4 truncate">
          PLAYER
        </div>
        <div className="font-bold uppercase text-white text-xs sm:text-sm text-right pt-4 pb-4 truncate">
          GAMES
        </div>
        <div className="font-bold uppercase text-white text-xs sm:text-sm text-right pt-4 pb-4 truncate">
          %P/G
        </div>
        <div className="font-bold uppercase text-white text-xs sm:text-sm text-right pt-4 pb-4 truncate">
          TOTAL KO's
        </div>
        <div className="font-bold uppercase text-white text-xs sm:text-sm text-right pt-4 pb-4 truncate">
          TOTAL POINTS
        </div>
        <div className="font-bold uppercase text-white text-xs sm:text-sm text-right pt-4 pb-4 pr-4 truncate">
          BEST 15
        </div>
      </div>
      <div className="flex flex-col">
        {sortedPlayers.map((player: IPlayer, index) => (
          <div
            key={player.id}
            className="grid grid-cols-standings7 gap-4 border-b items-center first-of-type:bg-green-50 last-of-type:bg-red-50"
          >
            <div className="font-bold text-sm border-l-4 border-l-amber-500 p-2 pl-4">
              {index + 1}
            </div>
            <div className="text-xs font-bold truncate">{player.nickname}</div>
            <div className="text-xs p-2 text-right">
              {getPlayerSeasonGamesCount(props.season, player.id)}
            </div>
            <div className="text-xs text-right">
              {getPlayerSeasonPointsPerGamePercentage(props.season, player.id)}
            </div>
            <div className="text-xs text-right">
              {getPlayerTotalSeasonKos(props.season, player.id)}
            </div>
            <div className="text-xs p-2 text-right">
              {getPlayerSeasonPoints(props.season, player.id)}
            </div>
            <div className="font-bold text-sm text-indigo-800 text-right pr-4">
              {getPlayerSeasonBestGamesPointsWithHandicap(props.season, player.id)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
