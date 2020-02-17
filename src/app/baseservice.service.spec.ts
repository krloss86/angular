import { TestBed } from '@angular/core/testing';

import { BaseserviceService } from './baseservice.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('BaseserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
      ]
  }));

  it('should be created', () => {
    const service: BaseserviceService = TestBed.get(BaseserviceService);
    expect(service).toBeTruthy();
  });
});
