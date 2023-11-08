import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelFacilComponent } from './nivel-facil.component';

describe('NivelFacilComponent', () => {
  let component: NivelFacilComponent;
  let fixture: ComponentFixture<NivelFacilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelFacilComponent]
    });
    fixture = TestBed.createComponent(NivelFacilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
