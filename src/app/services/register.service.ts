import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl = environment.apiUrl;
  private registerEndPointRest = 'user';

  constructor(
    private httpClient: HttpClient) {

  }

  register(user: any): Observable<any> {

    const myheader = new HttpHeaders().set('Content-Type', 'application/json');
    const userJsonData = JSON.stringify(user);
    return this.httpClient.
      post<any>(`${this.baseUrl}/api/${this.registerEndPointRest}`,
         userJsonData,
        { headers: myheader}
      ).pipe(map((user: any) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        // this.currentUserSubject.next(user);
        return user;
    }));
  }
}
