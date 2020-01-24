import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';
import { User } from './../../models/user';
import { AlertService } from './../../services/alert.service';

@Component({
  selector: 'app-persona-data',
  templateUrl: './persona-data.component.html',
  styleUrls: ['./persona-data.component.css']
})
export class PersonaDataComponent implements OnInit {

  profileForm: FormGroup;

  @Input()user: User;

  constructor(
    private formBuilder: FormBuilder,
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
      lastName: this.profileForm.get('lastName').value
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
