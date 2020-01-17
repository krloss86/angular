import { AlertService } from './../../services/alert.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = 'Registro de Usuario';
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private registerService: RegisterService,
      private alertService: AlertService
  ) {
      // redirect to home if already logged in
      /*if (this.authenticationService.currentUserValue) {
          this.router.navigate(['/home']);
      }*/
  }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          username: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit(): void {

    if (!this.registerForm.valid) {
      return ;
    }

    const user = {
      firstName: this.registerForm.get('firstName').value,
      lastName: this.registerForm.get('lastName').value,
      userName: this.registerForm.get('username').value,
      password: this.registerForm.get('password').value,
    };

    this.registerService.register(user)
    .subscribe( data => {
        console.log(data);
        this.alertService.success(`se ha dado de alta exitosamente el usuario ${data.username}`);
        this.registerForm.reset();
        // this.router.navigate(['/login']);
      }
    );
  }
}
