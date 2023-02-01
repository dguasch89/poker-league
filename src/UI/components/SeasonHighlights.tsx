import {getBestSeasonPlayers, getPlayerSeasonPoints} from '../../domain/utils';
import bronzeMedal from '../assets/bronze_medal.png';
import goldMedal from '../assets/gold_medal.png';
import silverMedal from '../assets/silver_medal.png';

interface SeasonHighlightsProps {
  seasonId: number;
}

export function SeasonHighlights(props: SeasonHighlightsProps) {
  const bestSeasonPlayers = getBestSeasonPlayers(props.seasonId);
  return (
    <section className="flex flex-col w-full sm:flex-row items-center gap-4 p-4 pl-6 pr-6">
      <div className="flex flex-col w-full sm:w-auto p-4 text-white bg-slate-800 rounded-md sm:min-w">
        <div className="flex flex-row justify-between sm:gap-12">
          <div className="text-3xl font-medium">1st</div>
          <img src={goldMedal} className="w-12" alt="gold-medal" />
        </div>
        <div className="text-md font-bold text-amber-500 mb-2">
          {getPlayerSeasonPoints(props.seasonId, bestSeasonPlayers[0].id)} points
        </div>
        <div className="text-sm">
          {bestSeasonPlayers[0].name} {bestSeasonPlayers[0].surname}
        </div>
      </div>
      <div className="flex flex-col w-full sm:w-auto p-4 text-white bg-slate-800 rounded-md">
        <div className="flex flex-row justify-between sm:gap-12">
          <div className="text-3xl font-medium">2nd</div>
          <img src={silverMedal} className="w-12" alt="silver-medal" />
        </div>
        <div className="text-md font-bold text-amber-500 mb-2">
          {getPlayerSeasonPoints(props.seasonId, bestSeasonPlayers[1].id)} points
        </div>
        <div className="text-sm">
          {bestSeasonPlayers[1].name} {bestSeasonPlayers[1].surname}
        </div>
      </div>
      <div className="flex flex-col w-full sm:w-auto p-4 text-white bg-slate-800 rounded-md">
        <div className="flex flex-row justify-between sm:gap-12">
          <div className="text-3xl font-medium">3rd</div>
          <img src={bronzeMedal} className="w-12" alt="bronze-medal" />
        </div>
        <div className="text-md font-bold text-amber-500 mb-2">
          {getPlayerSeasonPoints(props.seasonId, bestSeasonPlayers[2].id)} points
        </div>
        <div className="text-sm">
          {bestSeasonPlayers[2].name} {bestSeasonPlayers[2].surname}
        </div>
      </div>
    </section>
  );
}
