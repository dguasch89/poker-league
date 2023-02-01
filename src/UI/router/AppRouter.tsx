import {Route, Routes} from 'react-router-dom';
import {Schedule} from '../views/Schedule';
import {HomePage} from '../views/HomePage/HomePage';
import {Players} from '../views/Players';
import {Rules} from '../views/Rules';

export const HOME = '/';
export const PLAYERS = '/players';
export const CALENDAR = '/schedule';
export const RULES = '/rules';

export const mainRoute = '/';
export const routes = {
  players: '/players',
  schedule: '/schedule',
  rules: '/rules',
};

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={mainRoute} element={<HomePage />} />
      <Route path={routes.players} element={<Players />} />
      <Route path={routes.rules} element={<Rules />} />
      <Route path={routes.schedule} element={<Schedule />} />
      {/* <Route path="*" element={<PageNotFound />} /> */}
      {/* <Route path={ERROR} element={<ErrorPage />} /> */}
    </Routes>
  );
};
