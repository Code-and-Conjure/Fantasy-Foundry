import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'game', loadChildren: './game/game.module#GameModule'},
  { path: '', redirectTo: 'game', pathMatch: 'prefix'},
  { path: '**', redirectTo: 'game', pathMatch: 'prefix'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
