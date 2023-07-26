import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;
  constructor(
    private router: Router
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401 || err.status === 403) {
        localStorage.removeItem(this.authLocalStorageToken);
        this.router.navigate(['/auth/login'], {
          queryParams: {},
        });
       
      } else if (err.status === 400 || err.status === 500) {
        const error2 = err.error.message || err.statusText;
        if (error2 == 'USER_LOGOUT' || error2 == 'NOT_SHOW_ERROR') {
        } else {
          //this.snackbarService.error(error2);
        }

      }
      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
