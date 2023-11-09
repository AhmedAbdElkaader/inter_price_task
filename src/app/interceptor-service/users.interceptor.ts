import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
@Injectable()
export class UsersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authReq = request;
    authReq = this.addTokenHeader(authReq)

    return next.handle(authReq).pipe(
      catchError(error => {
        console.log(error)
        if (error.status === 401) {
          localStorage.clear()
          location.reload()
        }
        return throwError(error);
      }));
  }
  private addTokenHeader(request: HttpRequest<any>) {
    const token = localStorage.getItem('token')
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    return request.clone({ headers });
    // return request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
  }
}
