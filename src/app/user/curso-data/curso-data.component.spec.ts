import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDataComponent } from './curso-data.component';

describe('CursoDataComponent', () => {
  let component: CursoDataComponent;
  let fixture: ComponentFixture<CursoDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
