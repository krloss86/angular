import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { of, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PeticionerestService } from '../peticionerest.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {

  user: any;

  constructor(
    private auth: AuthService,
    private router: Router,
    private restService: PeticionerestService
  ) { }

  ngOnInit() {
  }

  logout(): void {
    this.auth.logout().subscribe(
      data => this.router.navigate(['/user']),
      error => { alert('Error en logout'); }
    );
  }

  getUserData() {

    this.restService.getUserById(2).subscribe(data => this.user = data);
  }

}
