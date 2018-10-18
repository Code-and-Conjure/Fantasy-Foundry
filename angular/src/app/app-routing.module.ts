import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'game', loadChildren: './game/game.module#GameModule'},
  { path: 'pc', loadChildren: './player-character/player-character.module#PlayerCharacterModule'},
  { path: '', redirectTo: 'pc', pathMatch: 'prefix'},
  { path: '**', redirectTo: 'pc', pathMatch: 'prefix'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
