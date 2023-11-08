import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarritaComponent } from './barrita.component';

describe('BarritaComponent', () => {
  let component: BarritaComponent;
  let fixture: ComponentFixture<BarritaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarritaComponent]
    });
    fixture = TestBed.createComponent(BarritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
