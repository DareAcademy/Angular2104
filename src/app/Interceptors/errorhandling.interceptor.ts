import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class ErrorhandlingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    return next.handle(request).pipe(
      catchError((error:HttpErrorResponse)=>{
        let msg=''
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!"
        });       
        return throwError(msg)
      })
    )
  }
}
