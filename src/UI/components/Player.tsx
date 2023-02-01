import {IPlayer} from '../../domain/interfaces';
import devAvatar from '../assets/dev.png';
import trophy from '../assets/trophy.png';
interface PlayerProps {
  player: IPlayer;
}

export function Player(props: PlayerProps) {
  return (
    <div className="flex flex-row gap-2 rounded-md bg-slate-800 p-4 text-white hover:-rotate-6 cursor-pointer transition duration-150 relative">
      <img src={devAvatar} alt="dev" className="w-16" />
      <div className="flex flex-col">
        <div className="font-bold text-2xl">{props.player.nickname}</div>
        <div className="font-light text-sm">
          {props.player.name} {props.player.surname}
        </div>
        <div className="flex flex-row items-center absolute bottom-1 right-2 gap-1">
          <img src={trophy} alt="trophy" className="w-4 h-4" />
          <div>{props.player.lastSeasonPosition}</div>
        </div>
      </div>
    </div>
  );
}
