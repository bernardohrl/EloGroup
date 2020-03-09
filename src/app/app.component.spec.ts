import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DadosPessoaisComponent } from './components/dadosPessoais/dadosPessoais.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DadosPessoaisComponent
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatIconModule,
        FormsModule, 
        ReactiveFormsModule
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });


  test('should create the app', () => {
  const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  test(`should have as title 'elogroup'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('elogroup');
  });

  test('should check if has telzir\'s logo', () => {
    const image = compiled.querySelector('img'); 
    expect(image.src).toContain('assets/logo-telzir.png');
  });

  test('header link should redirect to vizir', () => {
    const link =compiled.querySelector('a'); 
    expect(link.href).toBe('https://vizir.com.br/');
  });

  test('should display correct phone', () => {
    const phoneContainer = compiled.querySelector('#contato');
    expect(phoneContainer.innerHTML).toContain('0800 99 9999');
  });
});
