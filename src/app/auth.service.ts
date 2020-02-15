import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  public login(user: string, password:string) {
    const data = {
      email:  user,
      password: password
    };
    return this.httpClient.post(
      'https://reqres.in/api/login',
       data
      ).pipe(
        map((token: any) => {
          localStorage.setItem('token', token.token);
        })
      );
  }

  logout(): Observable<any> {
    localStorage.removeItem('token');
    return of('');      
  }
}
