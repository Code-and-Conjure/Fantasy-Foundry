import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatSnackBarModule,
  MatSnackBar,
  DateAdapter,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatDialog,
  MatDialogModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
} from '@angular/material';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './services/auth-interceptor.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { PouchService } from './services/pouch.service';
import { GameModule } from './game/game.module';
import { CreateFolderComponent } from './player-character/create-folder/create-folder.component';
import { EditFolderComponent } from './player-character/edit-folder/edit-folder.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateFolderComponent,
    EditFolderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production
    }),
    ReactiveFormsModule,
    EffectsModule.forRoot([]),
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 3000 } },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    MatSnackBar,
    PouchService,
  ],
  entryComponents: [
    CreateFolderComponent,
    EditFolderComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
