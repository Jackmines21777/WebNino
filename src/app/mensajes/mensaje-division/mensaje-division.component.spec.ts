import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeDivisionComponent } from './mensaje-division.component';

describe('MensajeDivisionComponent', () => {
  let component: MensajeDivisionComponent;
  let fixture: ComponentFixture<MensajeDivisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensajeDivisionComponent]
    });
    fixture = TestBed.createComponent(MensajeDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
