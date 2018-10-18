import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Store } from '@ngrx/store';
import { State } from '../store/pc.reducer';
import { RequestUpdateFolder } from '../store/pc.actions';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Folder } from '../model';

@Component({
  selector: 'rpg-edit-folder',
  templateUrl: './edit-folder.component.html',
  styles: []
})
export class EditFolderComponent implements OnInit {

  editForm: FormGroup = new FormGroup({
    _id: new FormControl(null, [Validators.required]),
    _rev: new FormControl(null, [Validators.required]),
    name: new FormControl(null, [Validators.required]),
    description: new FormControl(),
  });

  constructor(
    private _dialog: MatDialogRef<EditFolderComponent>,
    private _store: Store<State>,
    @Inject(MAT_DIALOG_DATA) public config: Folder
  ) { }

  ngOnInit() {
    this.editForm.patchValue(this.config);
  }

  submit() {
    if (!this.editForm.valid) return;

    const saveFolder = this.editForm.value as Folder;
    this._store.dispatch(new RequestUpdateFolder(saveFolder));
    this._dialog.close();
  }

}
