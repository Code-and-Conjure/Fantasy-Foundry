import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { reducers, metaReducers } from './store/reducer';
import { PlayerCharacterRoutingModule } from './player-character-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PlayerCharacterRoutingModule,
    StoreModule.forFeature("character", reducers, { metaReducers }),
  ],
  declarations: []
})
export class PlayerCharacterModule { }
