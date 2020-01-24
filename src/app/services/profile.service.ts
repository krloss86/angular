import { User } from './../models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { BaseService } from './baseservice';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends BaseService {
  // private updateEndPoint = '/api/profile';

  private updateProfileEndPoint = '/assets/profile/updateProfile.json';
  private updateCursoEndPoint = '/assets/profile/updateCurso.json';

  constructor(
    private httpclient: HttpClient,
    private authenticationService: AuthenticationService) {
      super(httpclient);
    }

  updateProfile(user: User): Observable<User> {
    // toma el usuario
    const currentUser = this.authenticationService.currentUserValue;

    // completa los datos del curso
    user.curso = currentUser.curso;

    /*return this.httpclient.put<User>(
      `${this.baseUrl}${this.updateEndPoint}`,
       user
    )*/
    return this.httpclient.get<User>(
      `${this.baseUrl}${this.updateProfileEndPoint}`
    ).pipe(map(data => {
      // store user details and jwt token to keep user logged in between page refreshes
      this.authenticationService.updateUser(user);
      return data;
    }));
  }

  updateCurso(curso: any): Observable<User> {
    const currentUser = this.authenticationService.currentUserValue;
    currentUser.curso = curso;
    /*return this.httpclient.put<User>(
      `${this.baseUrl}${this.updateEndPoint}`, currentUser
    )*/
    return this.httpclient.get<User>(
      `${this.baseUrl}${this.updateCursoEndPoint}`
    ).pipe(map(data => {
      // store user details and jwt token to keep user logged in between page refreshes
      this.authenticationService.updateUser(currentUser);
      return data;
    }));
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

