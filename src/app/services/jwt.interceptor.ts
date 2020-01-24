import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('JwtInterceptor...');
        // add authorization header with jwt token if available
        const currentUser = this.authenticationService.currentUserValue;
        // if (currentUser && currentUser.token) {
        const re = /auth/gi;

        if (request.url.search(re) === -1 ) {
            if (currentUser) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${currentUser.token}`
                    }
                });
            }
        }

        return next.handle(request);
    }
}
