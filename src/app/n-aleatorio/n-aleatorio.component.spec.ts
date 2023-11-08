import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NAleatorioComponent } from './n-aleatorio.component';

describe('NAleatorioComponent', () => {
  let component: NAleatorioComponent;
  let fixture: ComponentFixture<NAleatorioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NAleatorioComponent]
    });
    fixture = TestBed.createComponent(NAleatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
