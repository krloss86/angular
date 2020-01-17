import { AlertService } from './../../services/alert.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  user: User;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
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
    this.user = this.route.snapshot.data.profileData;
    this.profileForm.setValue({username: this.user.username});
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
