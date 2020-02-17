import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

import { PeticionerestService } from './peticionerest.service';
import { HttpClientModule } from '@angular/common/http';

describe('PeticionerestService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      HttpClientModule
    ],
  }));

  it('should be created', () => {
    const service: PeticionerestService = TestBed.get(PeticionerestService);
    expect(service).toBeTruthy();
  });
});
