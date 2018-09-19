import { Action } from '@ngrx/store';
import { Folder } from '../model';

export enum GameActionTypes {
  AddFolder = '[Game] Add Folder',
  LoadFolders = '[Game] Load Folders',
  SaveFolder = '[Game] Save Folder',
  SelectFolder = '[Game] Select Folder',
  SetFolders = '[Game] Set Folders',
  DeleteFolder = '[Game] Delete Folder',
  RemoveFolder = '[Game] Remove Folder',
  UpdateFolder = '[Game] Update Folder',
  RequestUpdateFolder = '[{Request} Game] Update Folder',
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

export class DeleteFolder implements Action {
  readonly type = GameActionTypes.DeleteFolder;

  constructor(public payload: Folder) { }
}

export class RemoveFolder implements Action {
  readonly type = GameActionTypes.RemoveFolder;

  constructor(public payload: Folder) { }
}

export class RequestUpdateFolder implements Action{
  readonly type = GameActionTypes.RequestUpdateFolder;

  constructor(public payload: Folder) { }
}

export class UpdateFolder implements Action {
  readonly type = GameActionTypes.UpdateFolder;

  constructor(public payload: Folder) { }
}

export type GameActions = LoadFolders | SelectFolder | SaveFolder | AddFolder | SetFolders | DeleteFolder | RemoveFolder | UpdateFolder | RequestUpdateFolder;
