import {Route, Routes} from 'react-router-dom';
import {HomePage} from '../views/HomePage/HomePage';

export const HOME = '/';
export const PLAYERS = '/players';
export const CALENDAR = '/calendar';
export const RULES = '/rules';
export const routes = {
  home: '/',
  players: '/players',
  calendar: '/calendar',
  rules: '/rules',
};

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<HomePage />} />
      {/* <Route path="*" element={<PageNotFound />} /> */}
      {/* <Route path={ERROR} element={<ErrorPage />} /> */}
    </Routes>
  );
};
