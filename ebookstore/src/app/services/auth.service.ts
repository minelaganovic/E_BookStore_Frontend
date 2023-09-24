import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService}from '@auth0/angular-jwt'
import { TokenApiModel } from '../models/token-api.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userPayload:any;
  private baseUrl: string="https://localhost:7143/api/User/";
  constructor(private http: HttpClient) { 
    this.userPayload=this.decodedToken();
  }
  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}authenticate`, loginObj)
  }
  loginadmin(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}authenticateadmin`, loginObj)
  }
  signUp(userObj: any){
    return this.http.post<any>(`${this.baseUrl}register`, userObj)
  }
  getAllUsers(){
    const url = `${this.baseUrl}`;
  return this.http.get<any[]>(url);
  }
  storeToken(tokenValue: string){
    localStorage.setItem('token',tokenValue)
  }
  getToken(){
    return localStorage.getItem('token');
  }
  storerefreshToken(tokenValue: string){
    localStorage.setItem('refreshtoken',tokenValue)
  }
  getrefreshToken(){
    return localStorage.getItem('refreshtoken');
  }
  isLoggedIn():boolean{
    return  !!localStorage.getItem('token')
  }
  decodedToken(){ ///funkcija koja salje podatke usera
    const jwtHelper= new JwtHelperService();
    const token= this.getToken()!;
    //console.log(jwtHelper.decodeToken(token))
    return jwtHelper.decodeToken(token);
  }
  getArrayUFromToken(){
    if(this.userPayload)
    return this.userPayload.unique_name;
  }
  getRoleFromToken(){
    if(this.userPayload)
    return this.userPayload.role;
  }
  renewToken(tokenApi: TokenApiModel){
    return this.http.post<any>(`${this.baseUrl}refresh` ,tokenApi)
  }
  
}
