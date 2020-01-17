import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = environment.apiUrl;
  private loginEndPoint = '/assets/login/login.json';
  private loginEndPointRest = 'api/auth';

  constructor(private httpClient: HttpClient) { }

  _login(username: string, password: string): Observable<any> {

    const myheader = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.
      post<any>(`${this.baseUrl}/${this.loginEndPointRest}`,
        { username, password },
        { headers: myheader}
    );
  }

  login(email: string, password: string): any {
    return this.httpClient.get(this.loginEndPoint);
  }

  logout(): void {
    console.log('LoginService: logout()');
  }
}
