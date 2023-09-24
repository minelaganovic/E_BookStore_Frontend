import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserstoreService {
  private ArrUs$= new BehaviorSubject<string[]>([]);
  private role$= new BehaviorSubject<string>("");


  constructor() { }
  public getUserInfoFromStore(){
    return this.ArrUs$.asObservable();
  }
  public setUserInfoFromStore(name:string[]){
    this.ArrUs$.next(name);
  }
  public getRoleFromStore(){
    return this.role$.asObservable();
  }
  public setRoleFromStore(role:string){
    this.role$.next(role);
  }
  
}

