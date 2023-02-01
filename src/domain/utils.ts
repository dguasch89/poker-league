import {usePlayersStore} from '../state/players';
import {useSeasonsStore} from '../state/seasons';
import {IGame, IPlayer, ISeason} from './interfaces';
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

const isLastGame = (game: IGame) => game.id === 10;

export const getPlayerGamePoints = (game: IGame, playerId: number): number => {
  const index = game.standings.findIndex((id: number) => id === playerId);
  const position = index != -1 ? index + 1 : 0;
  return pointsByPosition.get(position) || 0;
};

export const getPlayerSeasonPoints = (seasonId: number, playerId: number) => {
  const seasons: ISeason[] = useSeasonsStore.getState().seasons;
  const playerSeason = seasons.find((season: ISeason) => season.id === seasonId);
  const totalPoints = playerSeason?.games.reduce((acc: number, curr: IGame) => {
    const points = getPlayerGamePoints(curr, playerId);
    return (acc += isLastGame(curr) ? points * 2 : points);
  }, 0);
  return totalPoints;
};

export const getPlayerSeasonGamesCount = (seasonId: number, playerId: number) => {
  const seasons: ISeason[] = useSeasonsStore.getState().seasons;
  const playerSeason = seasons.find((season: ISeason) => season.id === seasonId);
  const totalGames = playerSeason?.games.reduce((acc: number, curr: IGame) => {
    const index = curr.standings.findIndex(id => id === playerId);
    return (acc += index != -1 ? 1 : 0);
  }, 0);
  return totalGames;
};
export const getPlayerSeasonPointsPerGamePercentage = (seasonId: number, playerId: number) => {
  const totalSeasonPoints = getPlayerSeasonPoints(seasonId, playerId);
  const totalSeasonGames = getPlayerSeasonGamesCount(seasonId, playerId);
  return (totalSeasonPoints / totalSeasonGames).toFixed(2);
};

export const sortPlayersByTotalSeasonPointsDesc = (seasonId: number, players: IPlayer[]) => {
  return players
    .sort((a: IPlayer, b: IPlayer) => {
      return getPlayerSeasonPoints(seasonId, a.id) - getPlayerSeasonPoints(seasonId, b.id);
    })
    .reverse();
};

export const getBestSeasonPlayers = (seasonId: number) => {
  const players: IPlayer[] = usePlayersStore.getState().players;
  const sortedPlayers = sortPlayersByTotalSeasonPointsDesc(seasonId, players);
  return sortedPlayers.slice(0, 3);
};

export const getBestPointsPerGamePercentagePlayer = (seasonId: number, players: IPlayer[]) => {
  return players.sort((a: IPlayer, b: IPlayer) => {
    return (
      getPlayerSeasonPointsPerGamePercentage(seasonId, b.id) -
      getPlayerSeasonPointsPerGamePercentage(seasonId, a.id)
    );
  })[0];
};
