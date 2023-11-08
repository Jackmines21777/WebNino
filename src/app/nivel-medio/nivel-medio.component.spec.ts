import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelMedioComponent } from './nivel-medio.component';

describe('NivelMedioComponent', () => {
  let component: NivelMedioComponent;
  let fixture: ComponentFixture<NivelMedioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelMedioComponent]
    });
    fixture = TestBed.createComponent(NivelMedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
