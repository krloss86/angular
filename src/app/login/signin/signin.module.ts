import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SigninComponent],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class SigninModule { }
