import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

import { LoginGuard } from './loginguard.service';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

describe('LoginGuard', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    providers: []
  }));

  it('should be created', () => {
    const service: LoginGuard = TestBed.get(LoginGuard);
    expect(service).toBeTruthy();
  });
});
