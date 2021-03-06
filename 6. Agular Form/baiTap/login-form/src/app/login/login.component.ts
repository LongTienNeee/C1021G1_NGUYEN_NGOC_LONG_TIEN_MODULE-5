import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)])
  });


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.loginForm.value)
  }

  goToAnotherPage() {
    window.location.href= "https://codegym.vn/";
  }
}
