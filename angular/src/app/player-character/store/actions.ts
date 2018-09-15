import { PlayerCharacter } from '../model';
import { Action } from '@ngrx/store';

export enum PlayerCharacterActionTypes {
  Update = "[Player Character] Update"
}

export class Update implements Action {
  readonly type = PlayerCharacterActionTypes.Update;

  constructor(public payload?: PlayerCharacter){}
}

export type PlayerCharacterActions = Update;
