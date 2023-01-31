import logo from './assets/poker.png';
import {Home} from './views/Home';

function App() {
  return (
    <div className="App">
      <header className="flex flex-row items-center gap-5 bg-amber-600 p-4 pt-2 pb-2">
        <img src={logo} className="w-12" alt="Poker" />
        <div className="flex flex-row gap-6 text-white text-md font-medium">
          <div className="font-bold">Jugadores</div>
          <div className="font-bold">Reglamento</div>
          <div className="font-bold">Calendario</div>
        </div>
      </header>
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
