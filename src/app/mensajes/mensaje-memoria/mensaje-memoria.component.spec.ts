import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeMemoriaComponent } from './mensaje-memoria.component';

describe('MensajeMemoriaComponent', () => {
  let component: MensajeMemoriaComponent;
  let fixture: ComponentFixture<MensajeMemoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensajeMemoriaComponent]
    });
    fixture = TestBed.createComponent(MensajeMemoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
