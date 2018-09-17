import { Action } from '@ngrx/store';
import { GameActions, GameActionTypes } from './game.actions';
import { Folder } from '../model';

export interface State {
  folders: Array<Folder>;
  selectedFolder: Folder;
}

export const initialState: State = {
  folders: [],
  selectedFolder: null
};

export function reducer(state = initialState, action: GameActions): State {
  switch (action.type) {
    case GameActionTypes.LoadFolders:
      return state;
    case GameActionTypes.SelectFolder:
      return { ...state, selectedFolder: { ...action.payload } };
    case GameActionTypes.AddFolder:
      return { ...state, folders: [...state.folders, action.payload] };
      case GameActionTypes.SetFolders:
      return { ...state, folders: [...action.payload]};
    default:
      return { ...state };
  }
}
