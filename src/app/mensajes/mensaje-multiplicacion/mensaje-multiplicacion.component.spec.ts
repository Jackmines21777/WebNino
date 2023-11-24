import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeMultiplicacionComponent } from './mensaje-multiplicacion.component';

describe('MensajeMultiplicacionComponent', () => {
  let component: MensajeMultiplicacionComponent;
  let fixture: ComponentFixture<MensajeMultiplicacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensajeMultiplicacionComponent]
    });
    fixture = TestBed.createComponent(MensajeMultiplicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
