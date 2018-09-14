import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { State as pc, reducer as pcreducer } from '../player-character/reducers/pc.reducer';
import { environment } from '../../environments/environment';

export interface State {
  character: pc
}

export const reducers: ActionReducerMap<State> = {
  character: pcreducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
