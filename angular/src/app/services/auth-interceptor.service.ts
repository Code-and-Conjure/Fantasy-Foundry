import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private _matSnackbar: MatSnackBar
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if(token) {
      const authRequest = req.clone({ setHeaders: {Authorization: `Bearer ${token}`}});

      return next.handle(authRequest)
        .pipe(
          catchError(this.handleError)
        );
    }

    return next.handle(req).pipe(
      catchError(this.handleError)
    );
  }

  handleError(e): Observable<any> {
    switch (e.status) {
      case 400:
        this._matSnackbar.open("Oops! That wasn't right. Please correct any issues and try again.", 'close');
        break;
      case 403:
      case 401:
        this._matSnackbar.open("You cannot perform that action! Please log in with the appropriate credentials", 'close');
        break;
      case 404:
        this._matSnackbar.open("Embarassing! That doesn't exist! Please request this as a feature!", 'close');
      case 500:
        this._matSnackbar.open("SERVER ERROR: Unable to complete request!", 'close');
        break;
      default:
        this._matSnackbar.open("Something went wrong!", 'close');
        break;
    }

    return throwError(e);
  }
}
