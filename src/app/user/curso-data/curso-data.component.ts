import { ProfileService } from 'src/app/services/profile.service';
import { AlertService } from './../../services/alert.service';
import { AuthenticationService } from './../../services/authentication.service';
import { User } from 'src/app/models/user';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-data',
  templateUrl: './curso-data.component.html',
  styleUrls: ['./curso-data.component.css']
})
export class CursoDataComponent implements OnInit {

  profileForm: FormGroup;
  user: User;
  dias: string[] = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
  diaCurso: string;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: AuthenticationService,
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
    this.user = this.route.snapshot.data.profileData;
    this.profileForm.setValue(
      {
        curso: this.user.curso.nombre,
        turno: this.user.curso.turno,
        horario: this.user.curso.horario,
      }
    );
    this.diaCurso = this.user.curso.dia;
  }

  onSubmit() {

    const user: any = {
      curso: {
          nombre: this.profileForm.get('curso').value,
          dia: this.diaCurso,
          turno: this.profileForm.get('turno').value,
          horario: this.profileForm.get('horario').value,
      },
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
