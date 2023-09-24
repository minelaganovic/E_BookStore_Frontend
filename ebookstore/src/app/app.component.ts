import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Informacioni sistem Zavoda za Javno Zdravlje Sjenica';
  loggedin(){
    return localStorage.getItem('token');
  }
}
