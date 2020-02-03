import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ContadorService } from 'services/contador.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ ContadorService]
})
export class LoginComponent implements OnInit {

  @Input() contador: number;

  @Output() sumarEnAppComponent = new EventEmitter<number>();

  constructor(public contService: ContadorService) { }

  ngOnInit() {
    this.contador = this.contService.getCount();
  }

  sumar() {
    this.sumarEnAppComponent.emit(1);
    // console.log(`${this.contService.getNombre()} - ${this.contService.getCount()}`);
    this.contador = this.contService.getCount();
  }

}
