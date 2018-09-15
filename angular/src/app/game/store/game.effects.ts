import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { GameActionTypes } from './game.actions';

@Injectable()
export class GameEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(GameActionTypes.LoadGames));

  constructor(private actions$: Actions) {}
}
