import { ProfileService } from 'src/app/services/profile.service';
import { AlertService } from './../../services/alert.service';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from './../../models/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-persona-data',
  templateUrl: './persona-data.component.html',
  styleUrls: ['./persona-data.component.css']
})
export class PersonaDataComponent implements OnInit {

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
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.user = this.route.snapshot.data.profileData;
    this.profileForm.setValue(
      {
        userName: this.user.userName,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
      }
    );
  }

  onSubmit() {

    const user: User = {
      userName: this.profileForm.get('userName').value,
      firstName: this.profileForm.get('firstName').value,
      lastName: this.profileForm.get('lastName').value,
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
