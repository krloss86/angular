import { RouterTestingModule } from '@angular/router/testing';
import { PeticionerestService } from './../peticionerest.service';
import { AuthService } from './../auth.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserdataComponent } from './userdata.component';
import { HttpClientModule } from '@angular/common/http';

describe('UserdataComponent', () => {
  let component: UserdataComponent;
  let fixture: ComponentFixture<UserdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserdataComponent],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
        AuthService,
        PeticionerestService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
