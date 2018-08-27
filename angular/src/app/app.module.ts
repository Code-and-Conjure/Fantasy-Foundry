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
} from '@angular/material';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './services/auth-interceptor.service';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 3000 } },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    MatSnackBar,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
