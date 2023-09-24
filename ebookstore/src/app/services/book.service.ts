import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl: string="https://localhost:7143/api";
  private baseUrl1: string="https://localhost:7143/api/Book/";
  constructor(private http:HttpClient) { }

  getBookList():Observable<any[]> {
    return this.http.get<any>(this.baseUrl+ '/Book');
  }
  getBookInfo(id:number){
    return this.http.get<any[]>(this.baseUrl1+`${id}`);
  }
  getNewBook():Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl1+'paginacija');
  }
  getTopListBook():Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl1+'toplista');
  }
  getSearchBook(naslov:string){
    return this.http.get<any[]>(this.baseUrl1+`/${naslov}`);
  } 
  getAutorList():Observable<any[]> {
    return this.http.get<any>(this.baseUrl+ '/Autor');
  }
  getIzdavacList():Observable<any[]> {
    return this.http.get<any>(this.baseUrl+ '/Izdavac');
  }
}
