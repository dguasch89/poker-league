import {useState} from 'react';
import {SeasonHighlights} from '../../components/SeasonHighlights';
import {Standings} from '../../components/Standings';
import './homePage.css';
import {useSeasonsStore} from '../../../state/seasons';
import {ISeason} from '../../../domain/interfaces';
import {isSeasonFinalized} from '../../../domain/season';
import {StandingsBest8} from '../../components/StandingsBest8';
import {SeasonHighlightsBest8} from '../../components/SeasonHighlightsBest8';
import {SeasonDetail} from '../../components/SeasonDetail';

export function HomePage() {
  const [seasonSelected, setSeasonSelected] = useState(2);
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
          data-testid="tab-item"
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
          data-testid="tab-item"
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
          className={`flex flex-col gap-8 p-4 sm:pr-8 sm:pl-8 ${
            seasonSelected != season.id && 'hidden'
          } `}
        >
          {isSeasonFinalized(season) ? (
            season.id === 1 ? (
              <SeasonHighlights season={season} />
            ) : (
              <SeasonHighlightsBest8 season={season} />
            )
          ) : (
            <div className="flex p-10 w-full">Highlights will appear when season ends</div>
          )}

          {season.id === 1 ? <Standings season={season} /> : <StandingsBest8 season={season} />}
          <SeasonDetail season={season} />
        </div>
      ))}
    </div>
  );
}
