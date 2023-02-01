import {useState} from 'react';
import {IPlayer} from '../../../domain/interfaces';
import {getPlayerSeasonPoints} from '../../../domain/utils';
import {usePlayersStore} from '../../../state/players';
import bronzeMedal from '../../assets/bronze_medal.png';
import goldMedal from '../../assets/gold_medal.png';
import silverMedal from '../../assets/silver_medal.png';
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
      <div className="flex flex-row gap-6 p-6 pt-8 pb-4">
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
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col w-full gap-4">
            <section className="flex flex-col w-full sm:flex-row items-center gap-4 p-4 pl-6 pr-6">
              <div className="flex flex-col w-full sm:w-auto p-4 text-white bg-slate-800 rounded-md sm:min-w">
                <div className="flex flex-row justify-between sm:gap-12">
                  <div className="text-3xl font-medium">1st</div>
                  <img src={goldMedal} className="w-12" alt="gold-medal" />
                </div>
                <div className="text-md font-bold text-amber-500 mb-2">165 points</div>
                <div className="text-sm">Joan Bruguera</div>
              </div>
              <div className="flex flex-col w-full sm:w-auto p-4 text-white bg-slate-800 rounded-md">
                <div className="flex flex-row justify-between sm:gap-12">
                  <div className="text-3xl font-medium">2nd</div>
                  <img src={silverMedal} className="w-12" alt="silver-medal" />
                </div>
                <div className="text-md font-bold text-amber-500 mb-2">159 points</div>
                <div className="text-sm">Natán Peris</div>
              </div>
              <div className="flex flex-col w-full sm:w-auto p-4 text-white bg-slate-800 rounded-md">
                <div className="flex flex-row justify-between sm:gap-12">
                  <div className="text-3xl font-medium">3rd</div>
                  <img src={bronzeMedal} className="w-12" alt="bronze-medal" />
                </div>
                <div className="text-md font-bold text-amber-500 mb-2">128 points</div>
                <div className="text-sm">Daniel Sánchez</div>
              </div>
            </section>
          </div>

          <section className="flex flex-col w-full p-6">
            <Standings season={1} />
          </section>
        </div>
      )}
    </div>
  );
}
