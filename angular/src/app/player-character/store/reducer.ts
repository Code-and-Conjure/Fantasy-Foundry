import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { PlayerCharacter } from '../model';
import { PlayerCharacterActions, PlayerCharacterActionTypes } from './actions';

export const initialState: PlayerCharacter = {
  _id: "pc_",
  levels: [],
  skills: [],
  abilities: [],
  inventory: [],
}

export interface State {
  character: PlayerCharacter
}

export function reducer(state = initialState, action: PlayerCharacterActions) {
  switch(action.type) {
    case PlayerCharacterActionTypes.Update:
      return {...state, ...action.payload}
    default:
      return state
  }
}

export const reducers: ActionReducerMap<State> = {
  character: reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
