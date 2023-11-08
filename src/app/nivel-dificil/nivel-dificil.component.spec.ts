import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelDificilComponent } from './nivel-dificil.component';

describe('NivelDificilComponent', () => {
  let component: NivelDificilComponent;
  let fixture: ComponentFixture<NivelDificilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelDificilComponent]
    });
    fixture = TestBed.createComponent(NivelDificilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
