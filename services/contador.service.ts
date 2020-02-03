import { Injectable } from '@angular/core';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class ContadorService {

  private count: number;
  private nombre: string;

  constructor() {
    this.count = 0;
    this.nombre = 'servicio-' + Math.random();
  }

  sum(): void {
    console.log(`${this.nombre} - ${this.count}`);
    this.count ++;
    // console.log(`nuevo valor: ${this.count}`);
  }

  incrementar(valor: number): void {
    console.log(`${this.nombre} - ${this.count}`);

    this.count += valor;
  }

  getCount(): number {
    return this.count;
  }

  getNombre(): string {
    return this.nombre;
  }
}
