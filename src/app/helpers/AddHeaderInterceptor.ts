import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../modules/auth';

export class AddHeaderInterceptor implements HttpInterceptor {
    constructor(
        private authSerice: AuthService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Clone the request to add the new header
        //const token = localStorage.getItem('auth_token');
        const user = this.authSerice.getLocalToken();
        const clonedRequest = user && user.authToken ? req.clone({ headers: req.headers.append('Authorization', `Bearer ${user.authToken}`) }) : req.clone({ headers: req.headers.append('Authorization', 'test') });
        // Pass the cloned request instead of the original request to the next handle
        return next.handle(clonedRequest);
    }
}