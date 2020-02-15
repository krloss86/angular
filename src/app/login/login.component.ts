import { Component, OnInit, Input } from '@angular/core';
import { ContadorService } from '../contador.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  valor: number;

  constructor(private contadorService: ContadorService) {
  
  }

  ngOnInit() {
    this.contadorService.getContadorSubjet().subscribe(
      data => {
        this.valor = data;
      }
    );
  }

  sumar(): void{
    this.contadorService.sumar();
  }
}
