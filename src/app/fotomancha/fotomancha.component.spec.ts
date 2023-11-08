import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotomanchaComponent } from './fotomancha.component';

describe('FotomanchaComponent', () => {
  let component: FotomanchaComponent;
  let fixture: ComponentFixture<FotomanchaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FotomanchaComponent]
    });
    fixture = TestBed.createComponent(FotomanchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
