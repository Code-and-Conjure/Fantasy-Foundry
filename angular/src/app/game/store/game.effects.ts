import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { GameActionTypes } from './game.actions';

import { GameService } from '../game.service';
import { DbPutResponse } from '../../models/db.model';

@Injectable()
export class GameEffects {

  constructor(
    private actions$: Actions,
    ) { }
}
