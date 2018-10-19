import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import {
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatExpansionModule,
  MatSidenavModule,
  MatListModule,
  MatTooltipModule
} from '@angular/material';
import { reducer } from './store/pc.reducer';
import { PlayerCharacterEffects } from './store/pc.effects';
import { PlayerCharacterRoutingModule } from './player-character-routing.module';
import { FolderListComponent } from './folder-list/folder-list.component';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    PlayerCharacterRoutingModule,
    StoreModule.forFeature("character", reducer),
    EffectsModule.forFeature([PlayerCharacterEffects]),
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  declarations: [FolderListComponent]
})
export class PlayerCharacterModule { }
