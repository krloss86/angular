import { AlertService } from './../services/alert.service';
import { AlertComponent } from './../alert/alert.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AlertService
  ],
  exports: [
    AlertComponent
  ]
})
export class AppCommonsModule { }
