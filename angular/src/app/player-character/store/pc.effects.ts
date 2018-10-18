import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PlayerCharacterActionTypes, RequestAddFolder, AddFolder, RequestLoadFolders, LoadFolders, DeleteFolder, RequestDeleteFolder, UpdateFolder, RequestUpdateFolder, UpsertFolder } from './pc.actions';
import { filter, tap, map, switchMap, flatMap, catchError } from 'rxjs/operators';
import { from } from 'rxjs';

import { PlayerCharacterService } from '../pc.service';
import { DbPutResponse } from '../../models/db.model';
import { Folder } from '../model';

@Injectable()
export class PlayerCharacterEffects {

  @Effect()
  loadFolders$ = this.actions$.pipe(
    ofType(PlayerCharacterActionTypes.RequestLoadFolders),
    switchMap(_ =>
      this._playerCharacterService.getFolders()
        .pipe(
          map(v => v.rows.map(r => r.doc)),
          map(v => new LoadFolders(v))
        )),
  )

  @Effect()
  saveFolder$ = this.actions$.pipe(
    ofType(PlayerCharacterActionTypes.RequestAddFolder),
    map((v: RequestAddFolder) => v.payload),
    switchMap(v =>
      this._playerCharacterService.saveFolder(v).pipe(
        map((r: DbPutResponse) => {
          v._rev = r.rev;
          return new AddFolder(v);
        })
      ))
  );

  @Effect()
  updateFolder$ = this.actions$.pipe(
    ofType(PlayerCharacterActionTypes.RequestUpdateFolder),
    map((v: RequestUpdateFolder) => v.payload),
    switchMap(v =>
      this._playerCharacterService.updateFolder(v).pipe(
        map((r: DbPutResponse) => {
          v._rev = r.rev;
          return new UpdateFolder(v);
        })
      ))
  );

  @Effect()
  folderChanges$ = this._playerCharacterService.changeFeed
    .pipe(
      filter(c => c._id.startsWith('folder_')),
      map(c => {
        if (c._deleted === true) {
          return new DeleteFolder(c);
        }
        else {
          return new UpsertFolder(c);
        }
      }
      ));

  @Effect()
  deleteFolder$ = this.actions$.pipe(
    ofType(PlayerCharacterActionTypes.RequestDeleteFolder),
    map((v: DeleteFolder) => v.payload),
    switchMap(a => this._playerCharacterService.deleteFolder(a)
      .pipe(
        map(_ => new DeleteFolder(a))
      )),
  );

  constructor(private actions$: Actions,
    private _playerCharacterService: PlayerCharacterService) { }
}
