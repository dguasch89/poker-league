import goldMedal from '../../assets/gold_medal.png';
import silverMedal from '../../assets/silver_medal.png';
import bronzeMedal from '../../assets/bronze_medal.png';
import './homePage.css';

export function HomePage() {
  return (
    <div className="HomePage">
      <section className="banner flex flex-col gap-2 items-center justify-items-center bg-emerald-500 p-5">
        <h2 className="font-bold text-md text-amber-500">POKER LEAGUE</h2>
        <h1 className="font-bold text-4xl text-white italic">UXLAND</h1>
      </section>
      <section className="flex flex-col sm:flex-row items-center gap-4 p-4">
        <div className="flex flex-col w-full sm:w-auto p-4 text-white bg-slate-800 rounded-md sm:min-w">
          <div className="flex flex-row justify-between sm:gap-12">
            <div className="text-4xl font-medium">1st</div>
            <img src={goldMedal} className="w-12" alt="gold-medal" />
          </div>
          <div className="text-md font-bold text-amber-500 mb-2">165 points</div>
          <div className="text-sm">Joan Bruguera</div>
        </div>
        <div className="flex flex-col w-full sm:w-auto p-4 text-white bg-slate-800 rounded-md">
          <div className="flex flex-row justify-between sm:gap-12">
            <div className="text-4xl font-medium">2nd</div>
            <img src={silverMedal} className="w-12" alt="silver-medal" />
          </div>
          <div className="text-md font-bold text-amber-500 mb-2">159 points</div>
          <div className="text-sm">Natán Peris</div>
        </div>
        <div className="flex flex-col w-full sm:w-auto p-4 text-white bg-slate-800 rounded-md">
          <div className="flex flex-row justify-between sm:gap-12">
            <div className="text-4xl font-medium">3rd</div>
            <img src={bronzeMedal} className="w-12" alt="bronze-medal" />
          </div>
          <div className="text-md font-bold text-amber-500 mb-2">128 points</div>
          <div className="text-sm">Daniel Sánchez</div>
        </div>
      </section>
    </div>
  );
}
