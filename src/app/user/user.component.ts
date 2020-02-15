import { Component, OnInit } from '@angular/core';
import { PeticionerestService } from '../peticionerest.service';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User;  
  loginForm: FormGroup;
  mensajeError: string;
  error: boolean;

  constructor(
    private peticionerestService: PeticionerestService,
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router
    ) { 
      this.createLoginForm();
  }

  createLoginForm(): void {
    this.loginForm = this.fb.group(
      {
        email: ['eve.holt@reqres.in', [Validators.required, Validators.email]], 
        password: ['cityslicka', [Validators.required, Validators.minLength(2)]]
      }
    );
  }

  ngOnInit() {
    this.peticionerestService.getUser().subscribe(
      data=> {
        this.users = data
      }
    );
  }

  executeLogin(): void {

    if(!this.loginForm.valid) {
      return ;
    }

    this.auth.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
    .subscribe(
      data => {
        this.error =  false;
        this.router.navigate(['/userdata']);
      },
      error => {
        this.error =  true;
        this.mensajeError = error;
      }
    );
  }
}
