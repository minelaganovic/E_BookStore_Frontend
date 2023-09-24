import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { UserstoreService } from 'src/app/services/userstore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  loginForm!: FormGroup;
  message = '';
  constructor(
    private fb: FormBuilder, 
    private auth: AuthService,
    private toast: ToastrService,
    private router: Router,
    private store: UserstoreService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pwd: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15),
        ],
      ],
    });
  }

  login() {
    this.auth.login(this.loginForm.value)
    .subscribe({
      next:(res)=>{
        console.log(res.message);
        this.loginForm.reset();
        this.auth.storeToken(res.accessToken);
        this.auth.storerefreshToken(res.refreshToken);
        const tokenPayload= this.auth.decodedToken();
        this.store.setUserInfoFromStore(tokenPayload.unique_name)
        this.store.setRoleFromStore(tokenPayload.role)
        this.toast.success("Uspešno", res.message); 
        if(tokenPayload.role==="user"){
          this.router.navigate(['userprofile/dashboard']);
        }
        else if(tokenPayload.role==="admin"){
          this.router.navigate(['userprofile/dashboarda']);
        }
       
      },
      error:(err)=>{
        this.toast.error("Neuspešno", "Nešto nije u redu! Proverite podatke!")
        console.log(err.message);
      }
    })    
  }

  get Email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  get PWD(): FormControl {
    return this.loginForm.get('pwd') as FormControl;
  }

}
