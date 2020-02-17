import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ContadorService } from './contador.service';
import { Injector } from '@angular/core';

describe('AppComponent', () => {
  let service: ContadorService;
  beforeEach(() => {
    // service = new ContadorService();
  });
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      /*imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        ContadorService
      ]*/
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should contadorService not null', () => {
    expect(service).toBeTruthy();
  });

  it(`should have as title 'clase3'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('clase3');
  });

  it(`should have as valor 0`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.valor).toEqual(0);

  });
/*
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to clase3!');
  });
*/
});
