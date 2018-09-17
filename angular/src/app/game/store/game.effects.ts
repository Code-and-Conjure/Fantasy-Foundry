import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { GameActionTypes, SaveFolder, AddFolder, LoadFolders, SetFolders } from './game.actions';
import { tap, map, switchMap, flatMap, catchError } from 'rxjs/operators';
import { from } from 'rxjs';

import { GameService } from '../game.service';
import { DbPutResponse } from '../../models/db.model';

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

  constructor(private actions$: Actions,
    private _gameService: GameService) { }
}
