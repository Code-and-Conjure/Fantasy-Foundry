import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { tap } from 'rxjs/operators';

import { PouchService } from '../services/pouch.service';
import { Folder } from './model';
import { DbQuery } from '../models/db.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(
    private _pouchService: PouchService
  ) { }

  getFolders(): Observable<DbQuery<Folder>> {
    return from(
      this._pouchService.db.allDocs(
        {
          include_docs: true,
          attachments: false,
          startkey: 'folder_',
          endkey: 'folder_\ufff0',
        }));
  }

  saveFolder(folder: Folder): Observable<any> {
    return from(this._pouchService.db.put(folder));
  }
}
