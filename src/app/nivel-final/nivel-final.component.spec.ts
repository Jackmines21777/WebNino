import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelFinalComponent } from './nivel-final.component';

describe('NivelFinalComponent', () => {
  let component: NivelFinalComponent;
  let fixture: ComponentFixture<NivelFinalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelFinalComponent]
    });
    fixture = TestBed.createComponent(NivelFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
