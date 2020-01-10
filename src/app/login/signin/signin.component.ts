import { LoginModel } from './login';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginModel: LoginModel;

  constructor() { }

  ngOnInit() {
    this.loginModel = new LoginModel('', '', false);
  }

  submitForm(formulario: any) {
    console.log(formulario.value);
  }
}
