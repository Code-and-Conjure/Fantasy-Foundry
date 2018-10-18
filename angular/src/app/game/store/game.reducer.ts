import { Action } from '@ngrx/store';
import { GameActions, GameActionTypes } from './game.actions';

export interface State {
}

export const initialState: State = {
};

export function reducer(state = initialState, action: GameActions): State {
  switch (action.type) {
    default:
      return { ...state };
  }
}
