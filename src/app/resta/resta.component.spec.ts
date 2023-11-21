import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaComponent } from './resta.component';

describe('RestaComponent', () => {
  let component: RestaComponent;
  let fixture: ComponentFixture<RestaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaComponent]
    });
    fixture = TestBed.createComponent(RestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
