import { AlertService } from './../../services/alert.service';
import { LoginService } from './../../login/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private alertService: AlertService
    ) {
      this.createForm();
    }

  createForm(): void {
    this.profileForm = this.formBuilder.group({
      username: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  logout(): void {
    console.log('logout de usuario');
    this.loginService.logout();
    console.log('redireccionando a / ');
    this.router.navigate(['']);
  }

  onSubmit() {
    this.alertService.success('Se ha actualizado los datos del perfil');
  }
}
