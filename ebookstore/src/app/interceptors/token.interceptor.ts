import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenApiModel } from '../models/token-api.model';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService, private router: Router,    private toast: ToastrService,
    ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const myToken=this.auth.getToken();
///provera da li je istekao token i dohvatanje greške
    if(myToken){
      request=request.clone({
        setHeaders: {Authorization: `Bearer ${myToken}`}
      })
    }
    return next.handle(request).pipe(
      catchError((err:any)=>{
        if(err instanceof HttpErrorResponse){
          if(err.status===401){
           return this.handleUnAuthorizedError(request,next)
          }
        }
        return throwError(()=>new Error ("Desila se neka greška"))
      })
    );
  }
  handleUnAuthorizedError(req:HttpRequest<any>, next:HttpHandler){
    let tokenApiModel= new TokenApiModel();
    tokenApiModel.accessToken= this.auth.getToken()!;
    tokenApiModel.refreshToken=this.auth.getrefreshToken()!;
    return this.auth.renewToken(tokenApiModel)
    .pipe(
      switchMap((data: TokenApiModel)=>{
        this.auth.storerefreshToken(data.refreshToken);
        this.auth.storeToken(data.accessToken)
        req=req.clone({
          setHeaders: {Authorization: `Bearer ${data.accessToken}`}
        })
        return next.handle(req)
      }),
      catchError((err)=>{
        return throwError(()=>{
            this.toast.success("Upozorenje", "Token je istekao, ponovo se prijavite!"); 
            this.router.navigate(['']);
        })
      })
    )
  }
}
