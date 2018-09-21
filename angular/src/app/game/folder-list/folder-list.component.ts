import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../store/game.reducer';
import { Observable } from 'rxjs';
import { Folder } from '../model';

import { selectFolders, selectFolderCount } from '../store/game.selectors';
import { LoadFolders, DeleteFolder } from '../store/game.actions';
import { MatDialog } from '@angular/material';
import { CreateFolderComponent } from '../create-folder/create-folder.component';
import { EditFolderComponent } from '../edit-folder/edit-folder.component';

@Component({
  selector: 'rpg-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FolderListComponent implements OnInit {

  folders$: Observable<Array<Folder>>;
  folderCount$: Observable<number>;

  constructor(
    private _store: Store<State>,
    private _dialog: MatDialog
  ) { }

  ngOnInit() {
    this._store.dispatch(new LoadFolders())
    this.folders$ = this._store.pipe(select(state => selectFolders(state)));
    this.folderCount$ = this._store.pipe(select(state => selectFolderCount(state)));
  }

  addFolder() {
    const ref = this._dialog.open(CreateFolderComponent).afterClosed().subscribe();
  }

  editFolder(folder: Folder) {
    const ref = this._dialog.open(EditFolderComponent, { data: folder }).afterClosed().subscribe();
  }

  deleteFolder(folder: Folder) {
    this._store.dispatch(new DeleteFolder(folder));
  }

}
