import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Folder } from '../model';
import { RequestAddFolder } from '../store/pc.actions';
import { ActivatedRoute } from '@angular/router';
import { switchMapTo } from 'rxjs/operators';
import { MatDialogRef } from '@angular/material';

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
    private _dialogRef: MatDialogRef<CreateFolderComponent>
  ) { }

  ngOnInit() {
  }

  submit(){
    if(! this.folderFormGroup.valid)
      return;
    const save = this.folderFormGroup.value as Folder;
    save._id = "folder_" + new Date().toISOString();

    this._store.dispatch(new RequestAddFolder(save))
    this._dialogRef.close();
  }

}
