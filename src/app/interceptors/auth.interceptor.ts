import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const sessionToken = localStorage.getItem('sessionToken') || '';
    const cloned = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${sessionToken}`)
    });

    return next.handle(cloned);
  }
}
