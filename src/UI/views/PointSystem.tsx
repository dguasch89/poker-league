import {IPlayer} from '../../domain/interfaces';
import {pointsByPositionSeason2} from '../../domain/season2';
import {usePlayersStore} from '../../state/players';

export function PointSystem() {
  return (
    <div className="Players p-4 flex flex-col gap-4 m-4">
      <h2 className="border-b-2 pb-4 border-orange-300 text-lg">
        Point system is calculated according the number of players in game and the position of each
        player. This system is more fair thatn Season 1, because it's not the same winning a game
        with 5 players that winning a game with 10 players.
      </h2>

      <h2 className="border-b-2 pb-4 border-orange-300 text-lg">
        After 10 games, best 8 games of each player will count for total points.
      </h2>
      {Object.values(pointsByPositionSeason2).map(points => {
        const totalPlayers = Object.values(points).length;
        return (
          <div key={totalPlayers} className="p-2 bg-slate-100 rounded-md">
            Game with {totalPlayers} players:{' '}
            {Object.values(points).map((value, index) => (
              <span className="m-1">
                <b className="text-orange-500">{index + 1}º</b>: {value}p
              </span>
            ))}
          </div>
        );
      })}
    </div>
  );
}
