import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosPessoaisComponent } from './DadosPessoais.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('DadosPessoaisComponent', () => {
  let component: DadosPessoaisComponent;
  let fixture: ComponentFixture<DadosPessoaisComponent>;
  let originElement: DebugElement;
  let destinyElement: DebugElement;
  let timeElement: DebugElement;
  let plansElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ 
        DadosPessoaisComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosPessoaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    originElement = fixture.debugElement.query(By.css('select[formControlName=selectedCallId]'));
    destinyElement = fixture.debugElement.query(By.css('select[formControlName=selectedDestinyId]'));
    timeElement = fixture.debugElement.query(By.css('input[formControlName=time]'));
    plansElement = fixture.debugElement.query(By.css('.btn-group-toggle'));
  });

  test("it creates dadosPessoais component", () => {
    expect(component).toBeTruthy();
  });

  test("origin initial state", () => {
    const index = originElement.nativeElement.value;
    const selectedOptionText = originElement.nativeElement.options[index].text

    expect(selectedOptionText).toBe('011');
  });

  test("destiny initial state", () => {
    const index = destinyElement.nativeElement.value;
    const selectedOptionText = destinyElement.nativeElement.options[index].text

    expect(selectedOptionText).toBe('016');
  });

  test("time initial state", () => {
    const value = timeElement.nativeElement.value;

    expect(value).toBe("15");
  });

  test("plans initial state", () => {    
    const plansArray = plansElement.nativeElement.getElementsByClassName('btn col-sm');

    expect(plansArray.length).toBe(4);
  });

  test("shows image", () => {    
    const compiled = fixture.debugElement.nativeElement;
    const image = compiled.querySelector('img'); 

    expect(image.src).toContain('assets/image.png');
  });

});
