import {Link, useMatch} from 'react-router-dom';
import {routes} from '../router';
import logo from '../assets/poker.png';
import {mainRoute} from '../router/AppRouter';

export function Navbar() {
  return (
    <div className="flex flex-row items-center gap-6 text-white text-md font-medium">
      <Link to={mainRoute}>
        <img
          src={logo}
          className="w-12 cursor-pointer hover:scale-x-110 hover:scale-y-110 transition duration-150"
          alt="Poker"
        />
      </Link>

      {Object.entries(routes).map(([route, uri]) => (
        <Link
          data-testid="nav-item"
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
