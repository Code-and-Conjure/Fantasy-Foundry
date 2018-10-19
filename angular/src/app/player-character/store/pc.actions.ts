import { Action } from '@ngrx/store';
import { Folder } from '../model';

export enum PlayerCharacterActionTypes {
  RequestAddFolder = '[{Request} PlayerCharacter] Add Folder',
  AddFolder = '[PlayerCharacter] Add Folder',
  RequestLoadFolders = '[{Request} PlayerCharacter] Load Folder',
  LoadFolders = '[PlayerCharacter] Load Folders',
  RequestDeleteFolder = '[{Request} PlayerCharacter] Delete Folder',
  DeleteFolder = '[PlayerCharacter] Delete Folder',
  RequestUpdateFolder = '[{Request} PlayerCharacter] Update Folder',
  UpdateFolder = '[PlayerCharacter] Update Folder',
  UpsertFolder = '[PlayerCharacter] Upsert Folder',
  SelectFolder = '[PlayerCharacter] Select Folder',
}

export class RequestLoadFolders implements Action {
  readonly type = PlayerCharacterActionTypes.RequestLoadFolders;
}

export class LoadFolders implements Action {
  readonly type = PlayerCharacterActionTypes.LoadFolders;

  constructor(public payload: Array<Folder>) { }
}

export class SelectFolder implements Action {
  readonly type = PlayerCharacterActionTypes.SelectFolder;

  constructor(public payload: Folder) { }
}


export class RequestAddFolder implements Action {
  readonly type = PlayerCharacterActionTypes.RequestAddFolder;

  constructor(public payload: Folder) { }
}

export class AddFolder implements Action {
  readonly type = PlayerCharacterActionTypes.AddFolder;

  constructor(public payload: Folder) { }
}

export class RequestDeleteFolder implements Action {
  readonly type = PlayerCharacterActionTypes.RequestDeleteFolder;

  constructor(public payload: Folder) { }
}

export class DeleteFolder implements Action {
  readonly type = PlayerCharacterActionTypes.DeleteFolder;

  constructor(public payload: Folder) { }
}

export class RequestUpdateFolder implements Action{
  readonly type = PlayerCharacterActionTypes.RequestUpdateFolder;

  constructor(public payload: Folder) { }
}

export class UpdateFolder implements Action {
  readonly type = PlayerCharacterActionTypes.UpdateFolder;

  constructor(public payload: Folder) { }
}

export class UpsertFolder implements Action {
  readonly type = PlayerCharacterActionTypes.UpsertFolder;

  constructor(public payload: Folder) { }
}

export type PlayerCharacterActions = RequestLoadFolders | SelectFolder | RequestAddFolder | AddFolder | LoadFolders | DeleteFolder | RequestDeleteFolder | UpdateFolder | RequestUpdateFolder | UpsertFolder;
