import {Player} from '../components/Player';
import {IPlayer} from '../../domain/interfaces';
import {usePlayersStore} from '../../state/players';
import {sortBy} from '../../domain/util.js';

export function Players() {
  const players: IPlayer[] = usePlayersStore.getState().players || [];
  const sortedPlayers = sortBy(players, (p: IPlayer) => p.nickname, 'asc');
  return (
    <div className="Players p-4 sm:grid sm:grid-cols-4 gap-4 flex flex-col">
      {sortedPlayers.map((player: IPlayer) => (
        <Player key={player.id} player={player} />
      ))}
    </div>
  );
}
