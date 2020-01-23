import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './../../models/user';
import { AlertService } from './../../services/alert.service';
import { AuthenticationService } from './../../services/authentication.service';
import { ProfileService } from './../../services/profile.service';
import { debug } from 'util';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  currentPath: string;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertService,
    private profileService: ProfileService
    ) {
      // tomo la url desde el reouter para usarlo en el switch 
      this.currentPath = this.router.url;
    }

  ngOnInit() {
    this.user = this.route.snapshot.data.profileData;
  }

  logout(): void {
    console.log('logout de usuario');
    this.loginService.logout();

    console.log('redireccionando a / ');
    this.router.navigate(['']);
  }

  changeRouterLink(link: string) {
    console.log(link);
    this.currentPath =  link;
  }
}
