import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './../../models/user';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  currentPath: string;
  constructor(
    private loginService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
    ) {
      // tomo la url desde el router para usarlo en el switch
      this.currentPath = this.router.url;

      // console.log('tomo dato del resolve');
      // this.user = this.route.snapshot.data.profileData;
    }

  ngOnInit() {
    this.loginService.currentUser.subscribe(
      data => {
        console.log('cambio de usuario');
        this.user = data;
      }
    );
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
