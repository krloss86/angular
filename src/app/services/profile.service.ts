import { BaseService } from './baseservice';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends BaseService {
  private updateEndPoint = 'api/user';
  constructor(private httpclient: HttpClient) {
    super(httpclient);
  }

  updateProfile(user: User): Observable<User> {
    return this.httpclient.put<User>(
      `${super.baseUrl}${this.updateEndPoint}`, user
    );
  }

}



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

