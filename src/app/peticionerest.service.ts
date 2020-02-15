import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { environment } from '../environments/environment';
import { BaseserviceService } from './baseservice.service';

@Injectable({
  providedIn: 'root'
})
export class PeticionerestService extends BaseserviceService{

  constructor(httClient: HttpClient) {
    super(httClient);
  }

  getUser(): Observable<User>{

    return this.httClient.get<User>(`${this.urlApi}/users`);
  } 

  getUserById(id: number) {
    return this.httClient.get<any>(`${this.urlApi}/users/2`);
  }

}
