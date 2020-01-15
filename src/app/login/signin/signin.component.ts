import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService) {
      this.createForm();
  }

  createForm(): void {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)])
    });
  }

  ngOnInit() {
  }

  onSubmit() {

    if (!this.loginForm.valid) {
      return;
    }

    // toma los datos del formulario
    const username = this.loginForm.get('username').value;

    const password = this.loginForm.get('password').value;

    const respuesta = this.loginService.login(username, password);

    console.log(respuesta);
  }

  // convenience getter for easy access to form fields
  // get f() { return this.loginForm.controls; }

}
