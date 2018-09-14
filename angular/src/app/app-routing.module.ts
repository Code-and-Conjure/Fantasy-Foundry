import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'pc', loadChildren: './player-character/player-character.module#PlayerCharacterModule'},
  { path: '', redirectTo: 'pc', pathMatch: 'full'},
  { path: '**', redirectTo: 'pc', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
