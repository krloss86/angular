import { AppCommonsModule } from './../app-commons/app-commons.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    RegisterComponent,
    SigninComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppCommonsModule
  ]
})
export class LoginModule { }
