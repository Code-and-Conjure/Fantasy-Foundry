import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { GameActionTypes, RequestAddFolder, AddFolder, RequestSetFolders, SetFolders, DeleteFolder, RequestDeleteFolder, UpdateFolder, RequestUpdateFolder, UpsertFolder } from './game.actions';
import { filter, tap, map, switchMap, flatMap, catchError } from 'rxjs/operators';
import { from } from 'rxjs';

import { GameService } from '../game.service';
import { DbPutResponse } from '../../models/db.model';
import { Folder } from '../model';

@Injectable()
export class GameEffects {

  @Effect()
  loadFolders$ = this.actions$.pipe(
    ofType(GameActionTypes.RequestSetFolders),
    switchMap(_ =>
      this._gameService.getFolders()
        .pipe(
          map(v => v.rows.map(r => r.doc)),
          map(v => new SetFolders(v))
        )),
  )

  @Effect()
  saveFolder$ = this.actions$.pipe(
    ofType(GameActionTypes.RequestAddFolder),
    map((v: RequestAddFolder) => v.payload),
    switchMap(v =>
      this._gameService.saveFolder(v).pipe(
        map((r: DbPutResponse) => {
          v._rev = r.rev;
          return new AddFolder(v);
        })
      ))
  );

  @Effect()
  updateFolder$ = this.actions$.pipe(
    ofType(GameActionTypes.RequestUpdateFolder),
    map((v: RequestUpdateFolder) => v.payload),
    switchMap(v =>
      this._gameService.updateFolder(v).pipe(
        map((r: DbPutResponse) => {
          v._rev = r.rev;
          return new UpdateFolder(v);
        })
      ))
  );

  @Effect()
  folderChanges$ = this._gameService.changeFeed
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
    ofType(GameActionTypes.RequestDeleteFolder),
    map((v: DeleteFolder) => v.payload),
    switchMap(a => this._gameService.deleteFolder(a)
      .pipe(
        map(_ => new DeleteFolder(a))
      )),
  );

  constructor(private actions$: Actions,
    private _gameService: GameService) { }
}
