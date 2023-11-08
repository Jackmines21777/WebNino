import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidoComponent } from './liquido.component';

describe('LiquidoComponent', () => {
  let component: LiquidoComponent;
  let fixture: ComponentFixture<LiquidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiquidoComponent]
    });
    fixture = TestBed.createComponent(LiquidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
