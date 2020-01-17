import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolve implements Resolve<User> {

  constructor(private authenticationService: AuthenticationService) {
    console.log('creando ClienteInformacionResolve');
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User {
    console.log(`ProfileResolve`);
    return JSON.parse(localStorage.getItem('currentUser'));
  }
}

