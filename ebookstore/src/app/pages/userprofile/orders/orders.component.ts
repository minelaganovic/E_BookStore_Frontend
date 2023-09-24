import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent  implements OnInit{
  userInfo:any;
  token:any;
  user_id:number;
  orderInfo:any;
  bookInfo:any;

constructor(private ord:OrderService, private book:BookService) {
  this.token=localStorage.getItem('token');
  const jwtHelper= new JwtHelperService();
  const dtoken1:any=jwtHelper.decodeToken(this.token);
  this.userInfo=dtoken1.unique_name;
  this.user_id=this.userInfo[0];
}
ngOnInit(): void {
  this.ord.getOrderByUId(this.user_id).subscribe(
    (data) => {
      this.orderInfo=data;
    },
    (error) => {
      console.error('Greška prilikom dobijanja infromacija o porudžbinama:', error);
    }
  );
  this.book.getBookList().subscribe(
    (data) => {
      this.bookInfo=data;
    },
    (error) => {
      console.error('Greška prilikom dobijanja infromacija o porudžbinama:', error);
    }
  );
}
}
