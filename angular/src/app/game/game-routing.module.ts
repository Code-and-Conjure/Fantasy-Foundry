import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateFolderComponent } from './create-folder/create-folder.component';

const routes: Routes = [
  { path: "folder", component: CreateFolderComponent },
  { path: "", redirectTo: "folder", pathMatch: "full" },
  { path: "**", redirectTo: "folder", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
