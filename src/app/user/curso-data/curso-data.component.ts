import { User } from './../../models/user';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
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
    private router: Router,
    private route: ActivatedRoute,
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
    // this.user = this.route.snapshot.data.profileData;
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
    // toma los datos del usuario desde el local stotage para mantener los datos
    // de perfil, dado que solo se actualizan los datos del curso
    const currentUser: User = JSON.parse(localStorage.getItem('currentUser'));

    const user: any = {
      curso: {
          nombre: this.profileForm.get('curso').value,
          dia: this.diaCurso,
          turno: this.profileForm.get('turno').value,
          horario: this.profileForm.get('horario').value
      },
      // completo los datos de perfil para no sobreescribir con nulos dichos campos
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      userName: currentUser.userName
    };

    this.profileService.updateProfile(user)
      .subscribe(
        data => {
          console.log(data);
          this.alertService.success('Se ha actualizado los datos del perfil');
        }
      );
  }
}
