import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  return next(req).pipe(
    catchError((error: HttpErrorResponse): Observable<any> => {
      if (error.status === 400) {
        router.navigate(['manufacturer/bad-request']);
      }
      if (error.status === 404) {
        router.navigate(['manufacturer/page-not-found']);
      }
      if (error.status === 500) {
        router.navigate(['manufacturer/internal-server-error']);
      }
      return throwError(() => error);
    })
  );
};
