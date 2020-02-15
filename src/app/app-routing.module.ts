import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserdataComponent } from './userdata/userdata.component';
import { LoginGuard } from './loginguard.service';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { 
    path: '', component: UserComponent, 
  },
  {
    path: 'user', component: UserComponent
  },
  {
    path: 'userdata', component: UserdataComponent, canActivate: [LoginGuard]
  },  
  {
    path: '**', component: NotfoundComponent
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', useHash: true, enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
