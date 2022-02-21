import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class WeatherInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const appid = 'c164b00ff4be0a96465577cd04567167';

    const requestCloned = request.clone({
      url: request.url + "&appid=" + appid,
    });

    return next.handle(requestCloned);
  }
}
