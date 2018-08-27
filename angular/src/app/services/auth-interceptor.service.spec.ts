import { TestBed, inject } from '@angular/core/testing';

import { AuthInterceptor } from './auth-interceptor.service';
import { MatSnackBar } from '@angular/material';

describe('AuthInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthInterceptor, MatSnackBar]
    });
  });

  it('should be created', inject([AuthInterceptor, MatSnackBar], (service: AuthInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
