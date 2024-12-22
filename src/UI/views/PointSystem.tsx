import {pointSystem} from '../../domain/point-system';
import {appendOrdinal} from '../utils/ordinals';

export function PointSystem() {
  return (
    <div className="Players p-4 flex flex-col gap-4 m-4">
      <h2 className="border-b-2 pb-4 border-orange-300 text-lg">
        The amount of points is calculated according the number of players in each game and the
        position of each player. This system is fairer than the one used in Season 1, because it's
        not the same to win a game with 5 players compared to winning a game with 10 players.
      </h2>

      {Object.values(pointSystem[3]).map(points => {
        const totalPlayers = Object.values(points).length;
        return (
          <div key={totalPlayers} className="p-2 bg-slate-100 rounded-md">
            Game with {totalPlayers} players:{' '}
            {Object.values(points).map((value, index) => (
              <span className="m-1">
                <b className="text-orange-500">{appendOrdinal(index + 1)}</b>: {value}p
              </span>
            ))}
          </div>
        );
      })}
    </div>
  );
}
