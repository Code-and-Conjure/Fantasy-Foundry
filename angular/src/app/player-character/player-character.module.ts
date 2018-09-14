import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import * as fromPc from './reducers/pc.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PcEffects } from './effects/pc.effects';
import { BaseInfoComponent } from './base-info/base-info.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('pc', fromPc.reducer),
    EffectsModule.forFeature([PcEffects]),
    StoreModule.forFeature('pc', fromPc.reducer, { metaReducers: fromPc.metaReducers }),
    RouterModule.forChild([
      { path: '' , component: BaseInfoComponent }
    ]),
  ],
  declarations: [BaseInfoComponent, BaseInfoComponent]
})
export class PlayerCharacterModule { }
