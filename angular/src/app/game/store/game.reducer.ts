import { Action } from '@ngrx/store';
import { GameActions, GameActionTypes } from './game.actions';
import { Folder } from '../model';

export interface State {
  folders: Array<Folder>;
}

export const initialState: State = {
  folders: []
};

export function reducer(state = initialState, action: GameActions): State {
  switch (action.type) {

    case GameActionTypes.LoadGames:
      return state;


    default:
      return state;
  }
}
