import {Link, useMatch} from 'react-router-dom';
import {routes} from '../router';
import logo from '../assets/poker.png';

export function Navbar() {
  return (
    <div className="flex flex-row items-center gap-6 text-white text-md font-medium">
      <img src={logo} className="w-12" alt="Poker" />
      {Object.entries(routes).map(([route, uri]) => (
        <Link
          key={route}
          to={uri}
          className={`font-bold hover:opacity-100 transition duration-150 first-letter:uppercase ${
            useMatch(route) ? 'opacity-100' : 'opacity-50'
          }`}
        >
          {route}
        </Link>
      ))}
    </div>
  );
}
