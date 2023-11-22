import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeRestaComponent } from './mensaje-resta.component';

describe('MensajeRestaComponent', () => {
  let component: MensajeRestaComponent;
  let fixture: ComponentFixture<MensajeRestaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensajeRestaComponent]
    });
    fixture = TestBed.createComponent(MensajeRestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
