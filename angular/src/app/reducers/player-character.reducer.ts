import { PlayerCharacter } from '../models/pc.model';
import { Action } from '@ngrx/store';

export enum PlayerCharacterActionTypes {
  Update = "[Player Character] Update"
}

export class Update implements Action {
  readonly type = PlayerCharacterActionTypes.Update;

  constructor(public payload?: PlayerCharacter){}
}

export type PlayerCharacterActions = Update;

export const initialState: PlayerCharacter = {
  _id: "pc_",
  levels: [],
  skills: [],
  abilities: [],
  inventory: [],
}

export function reducer(state = initialState, action: PlayerCharacterActions) {
  switch(action.type) {
    case PlayerCharacterActionTypes.Update:
      return {...state, ...action.payload}
    default:
      return state
  }
}
