import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the token from localStorage
    const token = localStorage.getItem('token');


    // Clone the request and add the token to the headers if it exists
    if (token) {
      const authReq = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
      return next.handle(authReq).pipe( tap(() => {},
      (err: any) => {
        //handle 401 error globally
      if (err instanceof HttpErrorResponse) {
        if (err.status !== 401) {
         return;
        }
        localStorage.clear();
        this.router.navigate(['login']);
      }
    }));
    }

    // If there's no token, just pass the original request
    return next.handle(request).pipe( tap(() => {},
    (err: any) => {
      //handle 401 error globally
    if (err instanceof HttpErrorResponse) {
      if (err.status !== 401) {
       return;
      }
      localStorage.clear();
      this.router.navigate(['login']);
    }
  }));
  }
}
