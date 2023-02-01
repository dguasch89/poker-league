import './app.css';
import {AppRouter} from './UI/router';
import {Navbar} from './UI/views/Navbar';

function App() {
  return (
    <div className="App">
      <header className="shadow-md fixed w-full h-16 z-10 flex flex-row items-center gap-5 bg-amber-600 p-4 pt-2 pb-2">
        <Navbar />
      </header>
      <main className="pt-16">
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
