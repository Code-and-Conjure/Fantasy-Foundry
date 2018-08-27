import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromPc from './reducers/pc.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PcEffects } from './effects/pc.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('pc', fromPc.reducer),
    EffectsModule.forFeature([PcEffects]),
    StoreModule.forFeature('pc', fromPc.reducer, { metaReducers: fromPc.metaReducers })
  ],
  declarations: []
})
export class PlayerCharacterModule { }
