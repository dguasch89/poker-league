import {Player} from '../components/Player';
import players from '../../domain/data/players.json';
import {IPlayer} from '../../domain/interfaces';

export function Players() {
  return (
    <div className="Players p-4 sm:grid sm:grid-cols-4 gap-4 flex flex-col">
      {players.map((player: IPlayer) => (
        <Player key={player.id} player={player} />
      ))}
    </div>
  );
}
