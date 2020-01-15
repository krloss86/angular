import { AlertService } from './../services/alert.service';
import { AlertComponent } from './../alert/alert.component';
import { LoginService } from './../login/login.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProfileComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ],
  providers: [AlertService]
})
export class UserModule { }
