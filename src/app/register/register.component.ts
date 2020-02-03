import { Component, OnInit, Input } from '@angular/core';
import { ContadorService } from 'services/contador.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ ContadorService]
})
export class RegisterComponent implements OnInit {

  @Input() contador: number;

  constructor(public contService: ContadorService) { }

  ngOnInit() {
    // this.contService.sum();

    this.contador = this.contService.getCount();
  }

  sumar(): void {
    // console.log(`${this.contService.getNombre()} - ${this.contService.getCount()}`);

    this.contService.sum();
    this.contador = this.contService.getCount();
  }
}
