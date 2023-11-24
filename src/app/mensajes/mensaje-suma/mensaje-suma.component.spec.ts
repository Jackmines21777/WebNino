import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeSumaComponent } from './mensaje-suma.component';

describe('MensajeSumaComponent', () => {
  let component: MensajeSumaComponent;
  let fixture: ComponentFixture<MensajeSumaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensajeSumaComponent]
    });
    fixture = TestBed.createComponent(MensajeSumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
