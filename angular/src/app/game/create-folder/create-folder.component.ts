import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as moment from 'moment';

import { Folder } from '../model';
import { SaveFolder, LoadFolders } from '../store/game.actions';

@Component({
  selector: 'rpg-create-folder',
  templateUrl: './create-folder.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateFolderComponent implements OnInit {

  folderFormGroup: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    description: new FormControl()
  });

  constructor(
    private _store: Store<any>,
  ) { }

  ngOnInit() {
    this._store.dispatch(new LoadFolders())
  }

  submit(){
    if(! this.folderFormGroup.valid)
      return;
    const save = this.folderFormGroup.value as Folder;
    save._id = "folder_" + moment().toISOString();

    this._store.dispatch(new SaveFolder(save))
  }

}
