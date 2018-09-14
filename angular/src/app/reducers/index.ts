import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { PlayerCharacter } from '../models/pc.model';
import { reducer as pcreducer } from './player-character.reducer';

export interface State {
  character: PlayerCharacter
}

export const reducers: ActionReducerMap<State> = {
  character: pcreducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
