import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../store/game.reducer';
import { pipe } from 'rxjs';

export const selectGame = createFeatureSelector<State>('game');

export const selectFolders = pipe( createSelector(selectGame, state => state.folders) );

export const selectFolderCount = pipe( createSelector(selectGame, state => state.folders.length));

export const selectSelectedFolder = pipe( createSelector(selectGame, state => state.selectedFolder));
