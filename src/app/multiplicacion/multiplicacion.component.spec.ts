import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicacionComponent } from './multiplicacion.component';

describe('MultiplicacionComponent', () => {
  let component: MultiplicacionComponent;
  let fixture: ComponentFixture<MultiplicacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiplicacionComponent]
    });
    fixture = TestBed.createComponent(MultiplicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
