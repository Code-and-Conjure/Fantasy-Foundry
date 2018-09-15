import { Action } from '@ngrx/store';

export enum GameActionTypes {
  LoadGames = '[Game] Load Games'
}

export class LoadGames implements Action {
  readonly type = GameActionTypes.LoadGames;
}

export type GameActions = LoadGames;
