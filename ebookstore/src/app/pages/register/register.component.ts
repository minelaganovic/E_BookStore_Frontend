import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm!:FormGroup;
  //public invaildRPWD: boolean = false;

  constructor(
    private fb: FormBuilder, private auth: AuthService, private router: Router, private toast: ToastrService
  ) {}
 
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('[a-zA-Z].*'),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('[a-zA-Z].*'),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      pwd: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15),
        ],
      ],
      rpwd: [
        '',
      [
        Validators.required,
      ]
    ]
    },{
      Validators:this.invaildRPWD
      ///proveriti kasnije
    });
  }

  invaildRPWD(){
    if(this.registerForm.get('rpwd')?.value !==this.registerForm.get('pwd')?.value)
    return true
    else 
    return false
  }
  
  register() {
    if(this.registerForm.valid && !this.invaildRPWD()){
     this.auth.signUp(this.registerForm.value)
    .subscribe({
      next:(res)=>{
        this.toast.success("Uspešno kreiranje vašeg naloga!", res.message); //5000milisekundi
        this.registerForm.reset();
        this.router.navigate(['login']);
      },
      error:(err)=>{
        this.toast.error("Neuspešno!", "Nešto nije u redu!Proverite podatke!")
      }
    }) } else{

    }  
  }

  //#region Getters
  get FirstName(): FormControl {
    return this.registerForm.get('firstName') as FormControl;
  }
  get LastName(): FormControl {
    return this.registerForm.get('lastName') as FormControl;
  }
  get Email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }
  get Address(): FormControl {
    return this.registerForm.get('address') as FormControl;
  }
  get PWD(): FormControl {
    return this.registerForm.get('pwd') as FormControl;
  }
  get RPWD(): FormControl {
    return this.registerForm.get('rpwd') as FormControl;
  }

}

