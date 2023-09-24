import { Component, EventEmitter, Output } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-search',
  
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  
  constructor(private service:BookService) { }

  ngOnInit(): void {
    //this.bookList$= this.service.getBookList(); 
    //this.autorList$= this.service.getAutorList();
  }
  pretraga:string="";

  @Output()
  promenatrzenogteksta:EventEmitter<string>= new EventEmitter<string>();

  onSearchTextChanged(){
    this.promenatrzenogteksta.emit(this.pretraga);
  }
}
