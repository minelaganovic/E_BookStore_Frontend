import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserhomeComponent } from './pages/userprofile/userhome/userhome.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './pages/userprofile/dashboard/dashboard.component';
import { OrdersComponent } from './pages/userprofile/orders/orders.component';
import { DashboardaComponent } from './pages/userprofile/dashboarda/dashboarda.component';
import { ReppageComponent } from './pages/userprofile/reppage/reppage.component';
import { BooksComponent } from './pages/books/books.component';
import { BookComponent } from './pages/book/book.component';
import { BookpComponent } from './pages/userprofile/bookp/bookp.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'books',component: BooksComponent },
  {path:'book/:id',component:BookComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'userprofile', component: UserhomeComponent,canActivate: [AuthGuard], children:[
    {path:'dashboard',component: DashboardComponent},
    {path:'orders',component:OrdersComponent},
    {path:'dashboarda',component: DashboardaComponent},
    {path:'reppage',component:ReppageComponent},
    {path:'bookp/:id',component:BookpComponent}

  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }