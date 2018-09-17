import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GameRoutingModule } from './game-routing.module';
import { CreateFolderComponent } from './create-folder/create-folder.component';

import {
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule
} from '@angular/material';
import { StoreModule } from '@ngrx/store';
import * as fromGame from './store/game.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GameEffects } from './store/game.effects';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GameRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    StoreModule.forFeature('game', fromGame.reducer),
    EffectsModule.forFeature([GameEffects]),
  ],
  declarations: [CreateFolderComponent]
})
export class GameModule { }
