export interface IEntityDescription {
  id: string;
  description: string;
}

export interface IPlayer {
  id: number;
  name: string;
  surname: string;
  nickname: string;
  lastSeasonPosition: number;
  active: boolean;
}

export interface IKO {
  playerId: number;
  count: number;
}

export interface IHandicap {
  playerId: number;
  points: number;
}

export interface IGame {
  id: number;
  description: string;
  standings: number[];
  kos: IKO[];
}

export type TSeasonType = 1 | 2 | 3 | 4; //1 = normal, 2 = best 8 games, 3 = best 12 games, 4 = best 10

export interface ISeason {
  id: number;
  description: string;
  type: TSeasonType;
  games: IGame[];
  handicaps: IHandicap[];
}

export interface IGameSchedule {
  id: number;
  date: any;
  winner?: number;
}
