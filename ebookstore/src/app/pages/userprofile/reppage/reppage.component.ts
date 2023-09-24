import { Component } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { BookService } from 'src/app/services/book.service';
import { OrderService } from 'src/app/services/order.service';
@Component({
  selector: 'app-reppage',
  templateUrl: './reppage.component.html',
  styleUrls: ['./reppage.component.css']
})
export class ReppageComponent {
  bookList$!:Observable<any[]>;
  orderList$!:Observable<any[]>;
  userList$!:Observable<any[]>;

  constructor(private api:BookService, private order:OrderService, private auth:AuthService, private router:Router, private route:ActivatedRoute, private toast: ToastrService){
    this.bookList$= this.api.getBookList();
    this.orderList$=this.order.GetAllOrders();
    this.userList$=this.auth.getAllUsers();
  }

  updateorder(order:number) {
      this.order.ApproveOrder(order).subscribe((res: any) => {
        this.toast.success("Uspešno", "Uspešno ste odobrili ste zahtev!"); 
        this.router.navigate(['/userprofile/dashboarda']);      },
      (error: any) => {
        this.toast.error("Neuspešno!"); 
            this.router.navigate(['userprofile/reppage']);
      });
      }
      
      isporuciorder(id:number,kolicina:number) {
        console.log("Pozivam isporuciorder sa id:", id, "i kolicinom:", kolicina);
        this.order.DeliveredOrder(id,kolicina).subscribe((res: any) => {
            this.toast.success("Uspešno", "Uspešna isporuka!"); 
            this.router.navigate(['/userprofile/dashboarda']);  
          },
          (error: any) => {
            this.toast.error("Neuspešno!"); 
            this.router.navigate(['userprofile/reppage']);
          });
          }
}
