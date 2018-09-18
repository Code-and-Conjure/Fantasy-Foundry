import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../store/game.reducer';
import { Observable } from 'rxjs';
import { Folder } from '../model';

import { selectFolders } from '../store/game.selectors';
import { LoadFolders, DeleteFolder } from '../store/game.actions';
import { MatDialog } from '@angular/material';
import { CreateFolderComponent } from '../create-folder/create-folder.component';

@Component({
  selector: 'rpg-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FolderListComponent implements OnInit {

  folders$: Observable<Array<Folder>>;

  constructor(
    private _store: Store<State>,
    private _dialog: MatDialog
  ) { }

  ngOnInit() {
    this._store.dispatch(new LoadFolders())
    this.folders$ = this._store.pipe(select(state => selectFolders(state)));
  }

  addFolder() {
    const ref = this._dialog.open(CreateFolderComponent).afterClosed().subscribe();
  }

  deleteFolder(folder: Folder) {
    this._store.dispatch(new DeleteFolder(folder));
  }

}
