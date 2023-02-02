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

export const getPlayerSeasonPoints = (season: ISeason, playerId: number) => {
  const totalPoints = season?.games.reduce((acc: number, curr: IGame) => {
    const points = getPlayerGamePoints(curr, playerId);
    return (acc += isLastGame(curr) ? points * 2 : points);
  }, 0);
  return totalPoints || 0;
};

export const getPlayerSeasonGamesCount = (season: ISeason, playerId: number) => {
  const totalGames = season?.games.reduce((acc: number, curr: IGame) => {
    const index = curr.standings.findIndex(id => id === playerId);
    return (acc += index != -1 ? 1 : 0);
  }, 0);
  return totalGames || 0;
};
export const getPlayerSeasonPointsPerGamePercentage = (season: ISeason, playerId: number): any => {
  const totalSeasonPoints = getPlayerSeasonPoints(season, playerId);
  const totalSeasonGames = getPlayerSeasonGamesCount(season, playerId);
  return totalSeasonGames > 0 ? (totalSeasonPoints / totalSeasonGames).toFixed(2) : 0;
};

export const sortPlayersByTotalSeasonPointsDesc = (season: ISeason, players: IPlayer[]) => {
  return players
    .sort((a: IPlayer, b: IPlayer) => {
      return getPlayerSeasonPoints(season, a.id) - getPlayerSeasonPoints(season, b.id);
    })
    .reverse();
};

export const getBestSeasonPlayers = (players: IPlayer[], season: ISeason) => {
  const sortedPlayers = sortPlayersByTotalSeasonPointsDesc(season, players);
  return sortedPlayers.slice(0, 3);
};

export const getBestPointsPerGamePercentagePlayer = (season: ISeason, players: IPlayer[]) => {
  return players.sort((a: IPlayer, b: IPlayer) => {
    return (
      getPlayerSeasonPointsPerGamePercentage(season, b.id) -
      getPlayerSeasonPointsPerGamePercentage(season, a.id)
    );
  })[0];
};

export const isSeasonFinalized = (season: ISeason) => {
  return season.games.length === 10;
};
