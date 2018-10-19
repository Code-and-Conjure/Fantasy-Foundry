import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../store/pc.reducer';
import { Observable } from 'rxjs';
import { Folder } from '../model';

import { selectFolders, selectFolderCount, selectSelectedFolder } from '../store/pc.selector';
import { RequestLoadFolders, RequestDeleteFolder, SelectFolder } from '../store/pc.actions';
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
  selectedFolder$: Observable<Folder>;

  constructor(
    private _store: Store<State>,
    private _dialog: MatDialog
  ) { }

  ngOnInit() {
    this._store.dispatch(new RequestLoadFolders())
    this.folders$ = this._store.pipe(select(state => selectFolders(state)));
    this.folderCount$ = this._store.pipe(select(state => selectFolderCount(state)));
    this.selectedFolder$ = this._store.pipe(select(state => selectSelectedFolder(state)));
  }

  addFolder() {
    const ref = this._dialog.open(CreateFolderComponent).afterClosed().subscribe();
  }

  editFolder(folder: Folder) {
    const ref = this._dialog.open(EditFolderComponent, { data: folder }).afterClosed().subscribe();
  }

  deleteFolder(folder: Folder) {
    this._store.dispatch(new RequestDeleteFolder(folder));
  }

  selectFolder(folder: Folder) {
    this._store.dispatch(new SelectFolder(folder));
  }

}
