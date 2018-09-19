import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { GameActionTypes, SaveFolder, AddFolder, LoadFolders, SetFolders, DeleteFolder, RemoveFolder, UpdateFolder, RequestUpdateFolder } from './game.actions';
import { filter, tap, map, switchMap, flatMap, catchError } from 'rxjs/operators';
import { from } from 'rxjs';

import { GameService } from '../game.service';
import { DbPutResponse } from '../../models/db.model';
import { Folder } from '../model';

@Injectable()
export class GameEffects {

  @Effect()
  loadFolders$ = this.actions$.pipe(
    ofType(GameActionTypes.LoadFolders),
    switchMap(_ =>
      this._gameService.getFolders()
        .pipe(
          map(v => v.rows.map(r => r.doc)),
          map(v => new SetFolders(v))
        )),
  )

  @Effect()
  saveFolder$ = this.actions$.pipe(
    ofType(GameActionTypes.SaveFolder),
    map((v: SaveFolder) => v.payload),
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
          return new RemoveFolder(c);
        }
        else if (c._rev.startsWith('1-')) {
          return new AddFolder(c);
        }
        else {
          return new UpdateFolder(c);
        }
      }
      ));

  @Effect()
  deleteFolder$ = this.actions$.pipe(
    ofType(GameActionTypes.DeleteFolder),
    map((v: DeleteFolder) => v.payload),
    switchMap(a => this._gameService.deleteFolder(a)
      .pipe(
        map(_ => new RemoveFolder(a))
      )),
  );

  constructor(private actions$: Actions,
    private _gameService: GameService) { }
}
