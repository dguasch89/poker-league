import {Player} from '../components/Player';
import {IPlayer} from '../../domain/interfaces';
import {usePlayersStore} from '../../state/players';

export function Players() {
  const players: IPlayer[] = usePlayersStore.getState().players;
  return (
    <div className="Players p-4 sm:grid sm:grid-cols-4 gap-4 flex flex-col">
      {players.map((player: IPlayer) => (
        <Player key={player.id} player={player} />
      ))}
    </div>
  );
}
