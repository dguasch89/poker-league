import {Player} from '../components/Player';
import players from '../data/players.json';
import {IPlayer} from '../model/interfaces';

export function Players() {
  return (
    <div className="Players p-4 sm:grid sm:grid-cols-4 gap-4 flex flex-col">
      {players.map((player: IPlayer) => (
        <Player player={player} />
      ))}
    </div>
  );
}
