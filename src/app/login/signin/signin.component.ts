import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  title = 'Bienvenido';
  loginForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: AuthenticationService,
    private router: Router) {
      this.createForm();
  }

  createForm(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

    if (!this.loginForm.valid) {
      return;
    }

    // toma los datos del formulario
    const userName = this.loginForm.get('userName').value;

    const password = this.loginForm.get('password').value;

    this.loading = true;

    this.loginService.login(userName, password).subscribe(
      data => {
        console.log(data);
        console.log('direccioando');
        this.router.navigate(['/profile']);
      },
      error => {
        this.loading = false;
      }
    );
  }

  // convenience getter for easy access to form fields
  get userName() { return this.loginForm.get('userName'); }
  get password() { return this.loginForm.get('password'); }

}
