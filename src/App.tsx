import './app.css';
import {AppRouter} from './router';
import {Navbar} from './views/Navbar';

function App() {
  return (
    <div className="App">
      <header className="flex flex-row items-center gap-5 bg-amber-600 p-4 pt-2 pb-2">
        <Navbar />
      </header>
      <main>
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
