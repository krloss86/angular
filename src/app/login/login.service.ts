import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginEndPoint = '/assets/login/login.json';

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): any {
    this.httpClient.get(
      this.loginEndPoint).subscribe(data => console.log(data.toString())
    );
  }

  /*login(email: string, password: string): Observable<any> {
    return this.httpClient.get(this.loginEndPoint);
  }*/
}
