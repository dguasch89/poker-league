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
import {SeasonHighlightsBest12} from '../../components/SeasonHighlightsBest12';
import {StandingsBest12} from '../../components/StandingsBest12';
import { StandingsBest10 } from "../../components/StandingsBest10";
import { SeasonHighlightsBest10 } from "../../components/SeasonHighlightsBest10";

export function HomePage() {
  const [seasonSelected, setSeasonSelected] = useState(5);
  const seasons = useSeasonsStore.getState().seasons;
  return (
    <div className="HomePage">
      <section className="banner flex flex-col gap-2 items-center justify-items-center bg-emerald-500 p-5">
        <h2 className="font-bold text-md text-amber-500">POKER LEAGUE</h2>
        <h1 className="font-bold text-4xl text-white italic">UXLAND</h1>
      </section>
      <div className="flex flex-row gap-6 p-8 pb-4">
        {seasons.map((s: ISeason) => (
          <div
            key={s.id}
            onClick={e => setSeasonSelected(s.id)}
            data-testid="tab-item"
            className={`font-bold text-xl cursor-pointer transition duration-150 ${
              seasonSelected === s.id
                ? 'opacity-100 text-indigo-900'
                : 'opacity-40 hover:opacity-100 hover:text-indigo-900'
            }`}
          >
            {s.description}
          </div>
        ))}
      </div>
      {seasons.map((season: ISeason) => (
        <div
          key={season.id}
          className={`flex flex-col gap-8 p-4 sm:pr-8 sm:pl-8 ${
            seasonSelected != season.id && 'hidden'
          } `}
        >
          {isSeasonFinalized(season) ? (
            season.type === 1 ? (
              <SeasonHighlights season={season} />
            ) : season.type === 2 ? (
              <SeasonHighlightsBest8 season={season} />
            ) : season.type === 4 ? (<SeasonHighlightsBest10 season={season} />) : (
              <SeasonHighlightsBest12 season={season} />
            )
          ) : (
            <div className="flex p-2 w-full">Highlights will appear when season ends</div>
          )}

          {season.type === 1 ? (
            <Standings season={season} />
          ) : season.type === 2 ? (
            <StandingsBest8 season={season} />
          ) : season.type === 4 ? (<StandingsBest10 season={season} />) : (
            <StandingsBest12 season={season} />
          )}
          <SeasonDetail season={season} />
        </div>
      ))}
    </div>
  );
}
