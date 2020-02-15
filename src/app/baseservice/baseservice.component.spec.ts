import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseserviceComponent } from './baseservice.component';

describe('BaseserviceComponent', () => {
  let component: BaseserviceComponent;
  let fixture: ComponentFixture<BaseserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
