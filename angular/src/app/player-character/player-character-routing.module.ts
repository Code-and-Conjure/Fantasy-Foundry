import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FolderListComponent } from './folder-list/folder-list.component';

const routes: Routes = [
  { path: "", component: FolderListComponent,
    children: [
    ]},
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerCharacterRoutingModule { }
