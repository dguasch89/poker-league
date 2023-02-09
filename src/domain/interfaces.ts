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
}

export interface IGame {
  id: number;
  description: string;
  standings: number[];
}

export interface ISeason {
  id: number;
  description: string;
  games: IGame[];
}

export interface IGameSchedule {
  position: string;
  date: any;
  hour: string;
  winner: string;
}
