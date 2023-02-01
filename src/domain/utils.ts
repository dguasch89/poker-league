import {useSeasonsStore} from '../state/seasons';
import {IGame, ISeason} from './interfaces';
const pointsByPosition = new Map([
  [1, 25],
  [2, 18],
  [3, 15],
  [4, 12],
  [5, 10],
  [6, 8],
  [7, 6],
  [8, 4],
  [9, 2],
]);

export const getPlayerGamePoints = (game: IGame, playerId: number): number => {
  const index = game.standings.findIndex((id: number) => id === playerId);
  const position = index && index + 1;
  return pointsByPosition.get(position) || 0;
};

export const getPlayerSeasonPoints = (seasonId: number, playerId: number) => {
  const seasons: ISeason[] = useSeasonsStore.getState().seasons;
  const playerSeason = seasons.find((season: ISeason) => season.id === seasonId);
  const totalPoints = playerSeason?.games.reduce((acc: number, curr: IGame) => {
    return (acc += getPlayerGamePoints(curr, playerId));
  }, 0);
  return totalPoints;
};
