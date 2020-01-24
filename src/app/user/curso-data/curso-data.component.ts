import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';
import { User } from './../../models/user';
import { AlertService } from './../../services/alert.service';

@Component({
  selector: 'app-curso-data',
  templateUrl: './curso-data.component.html',
  styleUrls: ['./curso-data.component.css']
})
export class CursoDataComponent implements OnInit {

  profileForm: FormGroup;
  @Input() curso: any;
  dias: string[] = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
  diaCurso: string;

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private profileService: ProfileService
    ) {
      this.createForm();
    }

  createForm(): void {
    this.profileForm = this.formBuilder.group({
      curso: ['', Validators.required],
      turno: ['', Validators.required],
      horario: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.profileForm.setValue(
      {
        curso: this.curso.nombre,
        turno: this.curso.turno,
        horario: this.curso.horario,
      }
    );
    this.diaCurso = this.curso.dia;
  }

  onSubmit() {
    const user: any = {
      curso: {
          nombre: this.profileForm.get('curso').value,
          dia: this.diaCurso,
          turno: this.profileForm.get('turno').value,
          horario: this.profileForm.get('horario').value
      },
    };

    this.profileService.updateCurso(user)
      .subscribe(
        data => {
          console.log(data);
          this.alertService.success('Se ha actualizado los datos del perfil');
        }
      );
  }
}
