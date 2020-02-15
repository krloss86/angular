import { Component, OnInit } from '@angular/core';
import { ContadorService } from '../contador.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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

}
