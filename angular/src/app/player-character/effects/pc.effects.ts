import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PcActionTypes } from '../actions/pc.actions';

@Injectable()
export class PcEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(PcActionTypes.LoadPcs));

  constructor(private actions$: Actions) {}
}
