import {IPlayer, ISeason} from '../../domain/interfaces';
import devAvatar from '../assets/dev.png';
import trophy from '../assets/trophy.png';
import {useSeasonsStore} from '../../state/seasons';
import {getPlayerAllTimeWins} from '../../domain/player';
import {usePlayersStore} from '../../state/players';
interface PlayerProps {
  player: IPlayer;
}

export function Player(props: PlayerProps) {
  const seasons: ISeason[] = useSeasonsStore.getState().seasons;
  const players: IPlayer[] = usePlayersStore.getState().players;
  return (
    <div
      className={`flex flex-row gap-2 rounded-md bg-slate-800 p-4 text-white hover:-rotate-6 cursor-pointer transition duration-150 relative ${
        !props.player.active ? 'opacity-40' : ''
      }`}
    >
      <img src={devAvatar} alt="dev" className="w-16" />
      <div className="flex flex-col">
        <div className="font-bold text-2xl">{props.player.nickname}</div>
        <div className="font-light text-sm">
          {props.player.name} {props.player.surname}
        </div>
        <div className="flex flex-row items-center absolute bottom-1 right-2 gap-1">
          <img src={trophy} alt="trophy" className="w-4 h-4" />
          <div>{getPlayerAllTimeWins(props.player.id, seasons)}</div>
        </div>
      </div>
    </div>
  );
}
