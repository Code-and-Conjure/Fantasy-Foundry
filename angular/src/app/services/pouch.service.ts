import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
import { Observable, from, fromEvent, merge } from 'rxjs';
import { filter, flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PouchService {

  private readonly _user = "admin";
  private readonly _password = "password";
  private readonly _remote = `http://${this._user}:${this._password}@localhost:5984/rpg_cli`

  private _db = new PouchDB("aurora-comatose");
  private _couch = new PouchDB(this._remote);

  public changeFeed: Observable<any>;
  public errorFeed: Observable<any>;

  get db() {
    return this._db;
  }

  set db(val) {
    this._db = val
  }

  login(replicationSource: string, user: string, password: string): Observable<any> {
    return from(new PouchDB(replicationSource).logIn(user, password));
  }

  constructor() {
    const db_changes = this._db.sync(this._couch, {
      live: true,
    });

    this.changeFeed = fromEvent(db_changes, 'change').pipe(
      filter((c: any) => c.direction === 'pull'),
      flatMap(c => c.change.docs),
    );
    this.errorFeed = fromEvent(db_changes, 'error');
  }

}
