import {useState} from 'react';
import {IPlayer} from '../../../domain/interfaces';
import {usePlayersStore} from '../../../state/players';
import {SeasonHighlights} from '../../components/SeasonHighlights';
import {Standings} from '../../components/Standings';
import './homePage.css';

export function HomePage() {
  const [seasonSelected, setSeasonSelected] = useState(1);
  const players: IPlayer[] = usePlayersStore.getState().players;
  return (
    <div className="HomePage">
      <section className="banner flex flex-col gap-2 items-center justify-items-center bg-emerald-500 p-5">
        <h2 className="font-bold text-md text-amber-500">POKER LEAGUE</h2>
        <h1 className="font-bold text-4xl text-white italic">UXLAND</h1>
      </section>
      <div className="flex flex-row gap-6 p-8 pb-4">
        <div
          onClick={e => setSeasonSelected(1)}
          className={`font-bold text-xl cursor-pointer transition duration-150 ${
            seasonSelected === 1
              ? 'opacity-100 text-indigo-900'
              : 'opacity-40 hover:opacity-100 hover:text-indigo-900'
          }`}
        >
          Season 1
        </div>
        <div
          onClick={e => setSeasonSelected(2)}
          className={`font-bold text-xl cursor-pointer transition duration-150 ${
            seasonSelected === 2
              ? 'opacity-100 text-indigo-900'
              : 'opacity-40 hover:opacity-100 hover:text-indigo-900'
          }`}
        >
          Season 2
        </div>
      </div>
      {seasonSelected === 1 && (
        <div className="flex flex-col sm:flex-row gap-8 p-4 sm:pr-8 sm:pl-8">
          <SeasonHighlights seasonId={1} />

          <section className="flex flex-col w-full">
            <Standings season={1} />
          </section>
        </div>
      )}
    </div>
  );
}
