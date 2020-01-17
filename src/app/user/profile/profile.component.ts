import { AlertService } from './../../services/alert.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user';
import { ProfileService } from 'src/app/services/profile.service';

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
    private alertService: AlertService,
    private profileService: ProfileService
    ) {
      this.createForm();
    }

  createForm(): void {
    this.profileForm = this.formBuilder.group({
      userName: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.user = this.route.snapshot.data.profileData;
    this.profileForm.setValue({userName: this.user.userName});
  }

  logout(): void {
    console.log('logout de usuario');
    this.loginService.logout();

    console.log('redireccionando a / ');
    this.router.navigate(['']);
  }

  onSubmit() {

    const user: User = {
      firstName: this.profileForm.get('firstName').value,
      lastName: this.profileForm.get('lastName').value,
      userName: this.profileForm.get('userName').value,
      password: this.profileForm.get('password').value,
      token: ''
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
