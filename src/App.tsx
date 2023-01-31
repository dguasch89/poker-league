import logo from './assets/poker.png';
import goldMedal from './assets/gold_medal.png';
import silverMedal from './assets/silver_medal.png';
import bronzeMedal from './assets/bronze_medal.png';

function App() {
  return (
    <div className="App">
      <header className="flex flex-row items-center gap-5 bg-amber-600 p-4">
        <img src={logo} className="w-12" alt="Poker" />
        <h1 className="text-white text-2xl font-medium">Uxland Poker League - Season 2</h1>
      </header>
      <main className="p-4">
        <section className="flex flex-col sm:flex-row items-center gap-4">
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
      </main>
    </div>
  );
}

export default App;
