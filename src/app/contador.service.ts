import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  private contadorBS = new BehaviorSubject(0);
  private condorSubject = this.contadorBS.asObservable();

  private valor: number;

  constructor() {
    this.valor = 0;
  }

  sumar(): void {
    this.contadorBS.next(++this.valor);
  }

  getContadorSubjet(): Observable<number> {
    return this.condorSubject;
  }
}
