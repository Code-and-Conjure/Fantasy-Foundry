import { Action } from '@ngrx/store';
import { Folder } from '../model';

export enum GameActionTypes {
  RequestAddFolder = '[{Request} Game] Add Folder',
  AddFolder = '[Game] Add Folder',
  RequestLoadFolders = '[{Request} Game] Load Folder',
  LoadFolders = '[Game] Load Folders',
  RequestDeleteFolder = '[{Request} Game] Delete Folder',
  DeleteFolder = '[Game] Delete Folder',
  RequestUpdateFolder = '[{Request} Game] Update Folder',
  UpdateFolder = '[Game] Update Folder',
  UpsertFolder = '[Game] Upsert Folder',
  SelectFolder = '[Game] Select Folder',
}

export class RequestLoadFolders implements Action {
  readonly type = GameActionTypes.RequestLoadFolders;
}

export class LoadFolders implements Action {
  readonly type = GameActionTypes.LoadFolders;

  constructor(public payload: Array<Folder>) { }
}

export class SelectFolder implements Action {
  readonly type = GameActionTypes.SelectFolder;

  constructor(public payload: Folder) { }
}


export class RequestAddFolder implements Action {
  readonly type = GameActionTypes.RequestAddFolder;

  constructor(public payload: Folder) { }
}

export class AddFolder implements Action {
  readonly type = GameActionTypes.AddFolder;

  constructor(public payload: Folder) { }
}

export class RequestDeleteFolder implements Action {
  readonly type = GameActionTypes.RequestDeleteFolder;

  constructor(public payload: Folder) { }
}

export class DeleteFolder implements Action {
  readonly type = GameActionTypes.DeleteFolder;

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

export class UpsertFolder implements Action {
  readonly type = GameActionTypes.UpsertFolder;

  constructor(public payload: Folder) { }
}

export type GameActions = RequestLoadFolders | SelectFolder | RequestAddFolder | AddFolder | LoadFolders | DeleteFolder | RequestDeleteFolder | UpdateFolder | RequestUpdateFolder | UpsertFolder;
