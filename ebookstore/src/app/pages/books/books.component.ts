import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  bookList$!:Observable<any[]>;
  newbookList$!:Observable<any[]>;
  topbookList$!:Observable<any[]>;

  autorList$!:Observable<any[]>;

  constructor(private service:BookService) { }

  ngOnInit(): void {
    this.newbookList$= this.service.getNewBook();
    this.topbookList$= this.service.getTopListBook();
    this.bookList$= this.service.getBookList();  
    this.autorList$= this.service.getAutorList();
  }
  pretraga:string="";

  OnsearchTextEntered(prettraga:string){
    this.pretraga=prettraga;
    console.log(this.pretraga);
  }
  loggedin(){
    return localStorage.getItem('token');
  }

}
