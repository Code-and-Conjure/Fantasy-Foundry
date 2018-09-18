import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'rpg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MatDialog]
})
export class AppComponent {
  title = 'Aurora Comatose';

  constructor(
    private _dialog: MatDialog
  ){}
}
