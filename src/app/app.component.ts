import { Component } from '@angular/core';
import { ContadorService } from 'services/contador.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ContadorService]
})
export class AppComponent {
  title = 'clase3-servicios-v1';

  contador: number;

  constructor(public contService: ContadorService) {
    this.contador = contService.getCount();
  }

  sumar(): void {
    console.log('AppComponent');

    this.contService.sum();
    this.contador = this.contService.getCount();
  }

  sumarEnAppComponent(valor: number ): void {
    this.contService.incrementar(valor);
    this.contador = this.contService.getCount();
  }

}
