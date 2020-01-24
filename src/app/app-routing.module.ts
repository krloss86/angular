import { LoggedGuard } from './services/logged.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './login/register/register.component';
import { SigninComponent } from './login/signin/signin.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', component: SigninComponent},
  {path: 'login', component: SigninComponent, canActivate: [LoggedGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [LoggedGuard]},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', useHash: true, enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
