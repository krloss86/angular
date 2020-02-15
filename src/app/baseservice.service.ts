import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseserviceService {

  protected urlApi = environment.restUrl;

  constructor(protected httClient: HttpClient) { }
}
