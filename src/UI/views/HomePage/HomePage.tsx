import {useState} from 'react';
import {SeasonHighlights} from '../../components/SeasonHighlights';
import {Standings} from '../../components/Standings';
import './homePage.css';
import {useSeasonsStore} from '../../../state/seasons';
import {ISeason} from '../../../domain/interfaces';
import {isSeasonFinalized} from '../../../domain/season';

export function HomePage() {
  const [seasonSelected, setSeasonSelected] = useState(1);
  const seasons = useSeasonsStore.getState().seasons;
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
      {seasons.map((season: ISeason) => (
        <div
          key={season.id}
          className={`flex flex-col sm:flex-row gap-8 p-4 sm:pr-8 sm:pl-8 ${
            seasonSelected != season.id && 'hidden'
          } `}
        >
          {isSeasonFinalized(season) ? (
            <SeasonHighlights season={season} />
          ) : (
            <div className="flex bg-indigo-800 rounded-md text-center text-white items-center justify-center font-semibold text-2xl italic p-10 w-full">
              Highlights will appear when season ends
            </div>
          )}

          <section className="flex flex-col w-full">
            <Standings season={season} />
          </section>
        </div>
      ))}
    </div>
  );
}
