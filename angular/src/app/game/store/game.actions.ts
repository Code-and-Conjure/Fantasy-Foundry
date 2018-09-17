import { Action } from '@ngrx/store';
import { Folder } from '../model';

export enum GameActionTypes {
  AddFolder = '[Game] Add Folder',
  LoadFolders = '[Game] Load Folders',
  SaveFolder = '[Game] Save Folder',
  SelectFolder = '[Game] Select Folder',
  SetFolders = '[Game] Set Folders',
}

export class LoadFolders implements Action {
  readonly type = GameActionTypes.LoadFolders;
}

export class SetFolders implements Action {
  readonly type = GameActionTypes.SetFolders;

  constructor(public payload: Array<Folder>) { }
}

export class SelectFolder implements Action {
  readonly type = GameActionTypes.SelectFolder;

  constructor(public payload: Folder) { }
}


export class SaveFolder implements Action {
  readonly type = GameActionTypes.SaveFolder;

  constructor(public payload: Folder) { }
}

export class AddFolder implements Action {
  readonly type = GameActionTypes.AddFolder;

  constructor(public payload: Folder) { }
}

export type GameActions = LoadFolders | SelectFolder | SaveFolder | AddFolder | SetFolders;
