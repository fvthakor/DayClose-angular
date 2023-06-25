import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../modules/auth';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private authSerice: AuthService
  ) { }


  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const user = this.authSerice.getLocalToken();
    if (user) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${user.authToken}`,
        },
      });
    }
    return next.handle(request).pipe(
      catchError((err) => {
        console.log(err);
        if (err.status === 401) {
          this.authSerice.logout();
        }
        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}
