import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../store/pc.reducer';
import { pipe } from 'rxjs';

export const selectPlayerCharacter = createFeatureSelector<State>('character');

export const selectFolders = pipe( createSelector(selectPlayerCharacter, state => state.folders) );

export const selectFolderCount = pipe( createSelector(selectPlayerCharacter, state => state.folders.length));

export const selectSelectedFolder = pipe( createSelector(selectPlayerCharacter, state => state.selectedFolder));
