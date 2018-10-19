import { Action } from '@ngrx/store';
import { PlayerCharacterActions, PlayerCharacterActionTypes } from './pc.actions';
import { Folder } from '../model';

export interface State {
  folders: Array<Folder>;
  selectedFolder: Folder;
}

export const initialState: State = {
  folders: [],
  selectedFolder: null
};

export function reducer(state = initialState, action: PlayerCharacterActions): State {
  let folders;
  switch (action.type) {
    case PlayerCharacterActionTypes.SelectFolder:
      return { ...state, selectedFolder: { ...action.payload } };
    case PlayerCharacterActionTypes.AddFolder:
      return { ...state, folders: [action.payload, ...state.folders] };
    case PlayerCharacterActionTypes.LoadFolders:
      return { ...state, folders: [...action.payload] };
    case PlayerCharacterActionTypes.DeleteFolder:
      const indexToRemove = state.folders.findIndex(i => i._id === action.payload._id);
      state.folders.splice(indexToRemove, 1);
      folders = state.folders;
      return { ...state, folders: folders }
    case PlayerCharacterActionTypes.UpdateFolder:
      folders = [...state.folders];
      let oldFolderIndex = folders.findIndex(f => f._id === action.payload._id);
      folders[oldFolderIndex] = action.payload;
      return { ...state, folders };
    case PlayerCharacterActionTypes.UpsertFolder:
      folders = [...state.folders];
      let existFolderIndex = folders.findIndex(f => f._id === action.payload._id);
      if (existFolderIndex > -1) {
        folders[existFolderIndex] = action.payload;
      } else {
        folders = [action.payload, ...folders];
      }
      return { ...state, folders: folders };
    default:
      return { ...state };
  }
}
