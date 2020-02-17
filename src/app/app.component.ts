import { Component, OnInit } from '@angular/core';
import { ContadorService } from './contador.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'clase3';
  valor: number;
  constructor(private contadorService: ContadorService) {
    this.valor = 0;
  }
  ngOnInit() {
    this.contadorService.getContadorSubjet().subscribe(
      data => {
        this.valor = data;
      }
    );
  }

  sumar(): void {
    this.contadorService.sumar();
  }
}
