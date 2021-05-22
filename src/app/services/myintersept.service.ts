import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Myintersept implements HttpInterceptor {
  num = 'repositories';
  type = 'tab';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // throw new Error('Method not implemented.');
    const request = req.clone({params: req.params.set(this.type, this.num)});
    return next.handle(request);
  }

}
