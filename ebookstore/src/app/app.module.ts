import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserhomeComponent } from './pages/userprofile/userhome/userhome.component' ;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { DashnavuComponent } from './pages/userprofile/dashnavu/dashnavu.component';
import { UserpanelComponent } from './pages/userprofile/userpanel/userpanel.component';
import { AuthService } from './services/auth.service';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './pages/userprofile/dashboard/dashboard.component';
import { DashboardaComponent } from './pages/userprofile/dashboarda/dashboarda.component';
import { OrdersComponent } from './pages/userprofile/orders/orders.component';
import { ReppageComponent } from './pages/userprofile/reppage/reppage.component';
import { BooksComponent } from './pages/books/books.component';
import { BookComponent } from './pages/book/book.component';
import { BookpComponent } from './pages/userprofile/bookp/bookp.component';
import { SearchComponent } from './pages/search/search.component';
import { BookService } from './services/book.service';
import { OrderService } from './services/order.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    UserhomeComponent,
    DashnavuComponent,
    UserpanelComponent,
    DashboardComponent,
    DashboardaComponent,
    OrdersComponent,
    ReppageComponent,
    BooksComponent,
    BookComponent,
    BookpComponent,
    SearchComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    ToastrModule.forRoot({
      timeOut:5000
    })
  ],
  providers: [
    AuthService,
    BookService,
    OrderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
