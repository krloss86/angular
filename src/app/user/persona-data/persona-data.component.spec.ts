import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaDataComponent } from './persona-data.component';

describe('PersonaDataComponent', () => {
  let component: PersonaDataComponent;
  let fixture: ComponentFixture<PersonaDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
