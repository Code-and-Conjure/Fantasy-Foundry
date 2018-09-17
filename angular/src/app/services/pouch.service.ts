import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';

@Injectable({
  providedIn: 'root'
})
export class PouchService {

  private _db = new PouchDB("aurora-comatose");

  get db() {
    return this._db;
  }

  set db(val) {
    this._db = val
  }

  constructor() {
  }

}
