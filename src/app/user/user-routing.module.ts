import { PersonaDataComponent } from './persona-data/persona-data.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../services/auth.guard';
import { ProfileResolve } from '../services/profile.service';
import { CursoDataComponent } from './curso-data/curso-data.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent, canActivate: [AuthGuard],
    resolve : {
      profileData: ProfileResolve
    },
    children: [
      {
        path: 'curso-data', component: CursoDataComponent/*,
        resolve : {
          profileData: ProfileResolve
        },*/
      },
      {
        path: 'persona-data', component: PersonaDataComponent/*, resolve : {
          profileData: ProfileResolve
        },*/
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
