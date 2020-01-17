import { ProfileComponent } from './user/profile/profile.component';
import { RegisterComponent } from './login/register/register.component';
import { SigninComponent } from './login/signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { ProfileResolve } from './services/profile.service';


const routes: Routes = [
  {path: '', component: SigninComponent},
  {path: 'login', component: SigninComponent},
  {path: 'register', component: RegisterComponent},
  // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]/*,
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard],
    resolve : {
        profileData: ProfileResolve
      }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
