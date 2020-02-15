import { TestBed } from '@angular/core/testing';

import { PeticionerestService } from './peticionerest.service';

describe('PeticionerestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeticionerestService = TestBed.get(PeticionerestService);
    expect(service).toBeTruthy();
  });
});
