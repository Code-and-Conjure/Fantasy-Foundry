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
  let folders;
  switch (action.type) {
    case GameActionTypes.SelectFolder:
      return { ...state, selectedFolder: { ...action.payload } };
    case GameActionTypes.AddFolder:
      return { ...state, folders: [action.payload, ...state.folders] };
    case GameActionTypes.SetFolders:
      return { ...state, folders: [...action.payload] };
    case GameActionTypes.DeleteFolder:
      const indexToRemove = state.folders.findIndex(i => i._id === action.payload._id);
      state.folders.splice(indexToRemove, 1);
      folders = state.folders;
      return { ...state, folders: folders }
    case GameActionTypes.UpdateFolder:
      folders = [...state.folders];
      let oldFolderIndex = folders.findIndex(f => f._id === action.payload._id);
      folders[oldFolderIndex] = action.payload;
      return { ...state, folders };
    case GameActionTypes.UpsertFolder:
      folders = [...state.folders];
      let existFolderIndex = folders.findIndex(f => f._id === action.payload._id);
      if(existFolderIndex > -1){
        folders[existFolderIndex] = action.payload;
      } else {
        folders = [action.payload, ...folders];
      }
      return {...state, folders};
    default:
      return { ...state };
  }
}
