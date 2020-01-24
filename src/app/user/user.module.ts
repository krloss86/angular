import { UserRoutingModule } from './user-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { PersonaDataComponent } from './persona-data/persona-data.component';
import { CursoDataComponent } from './curso-data/curso-data.component';

@NgModule({
  declarations: [
    ProfileComponent,
    PersonaDataComponent,
    CursoDataComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule
  ],
})
export class UserModule { }
