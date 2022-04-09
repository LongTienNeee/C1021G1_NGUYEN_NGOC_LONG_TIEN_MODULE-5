import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  check: boolean;
  password: string;
  confirmPassword: string;

  registerForm = new FormGroup({
    name: new FormControl("",[Validators.required]),
    age: new FormControl("", [Validators.min(18), Validators.required]),
    gender: new FormControl("", Validators.required),
    country: new FormControl("", [Validators.required]),
    phone: new FormControl("" ,  [Validators.minLength(10), Validators.maxLength(11), Validators.required,]),
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", Validators.required),
    confirmPassword: new FormControl("", [Validators.required, Validators.pattern(this.password)])
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registerForm.value)
  }

  inputPassword(password:string){
    this.password = password;
  }
  inputConfirmPassword( password:string){
    this.confirmPassword = password;
  }
}
