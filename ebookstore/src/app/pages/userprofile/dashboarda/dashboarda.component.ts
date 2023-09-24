import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
@Component({
  selector: 'app-dashboarda',
  templateUrl: './dashboarda.component.html',
  styleUrls: ['./dashboarda.component.css']
})
export class DashboardaComponent {
  bookList$!:Observable<any[]>;
  autorList$!:Observable<any[]>;
  izdavacList$!:Observable<any[]>;

  constructor(private api:BookService){
    this.bookList$= this.api.getBookList();
    this.autorList$= this.api.getAutorList();
    this.izdavacList$=this.api.getIzdavacList();
  }
}
