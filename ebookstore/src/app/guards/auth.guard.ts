import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // true i false vrednosti 
  constructor(private auth: AuthService, private router: Router, private toast: NgToastService){

  }
  canActivate(): boolean  {
    if(this.auth.isLoggedIn()){
      return true
    }else{
      this.toast.error({detail: "Neuspešno", summary:"Niste prijavljeni!", duration:5000})
      this.router.navigate(['']);
      return false

    }
  }
  
}
