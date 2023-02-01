import {Route, Routes} from 'react-router-dom';
import {Calendar} from '../views/Calendar';
import {HomePage} from '../views/HomePage/HomePage';
import {Players} from '../views/Players';
import {Rules} from '../views/Rules';

export const HOME = '/';
export const PLAYERS = '/players';
export const CALENDAR = '/calendar';
export const RULES = '/rules';

export const mainRoute = '/';
export const routes = {
  players: '/players',
  calendar: '/calendar',
  rules: '/rules',
};

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={mainRoute} element={<HomePage />} />
      <Route path={routes.players} element={<Players />} />
      <Route path={routes.rules} element={<Rules />} />
      <Route path={routes.calendar} element={<Calendar />} />
      {/* <Route path="*" element={<PageNotFound />} /> */}
      {/* <Route path={ERROR} element={<ErrorPage />} /> */}
    </Routes>
  );
};