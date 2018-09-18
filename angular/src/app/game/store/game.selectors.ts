import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../store/game.reducer';
import { pipe } from 'rxjs';

export const selectGame = createFeatureSelector<State>('game');

export const selectFolders = pipe( createSelector(selectGame, state => state.folders) );
