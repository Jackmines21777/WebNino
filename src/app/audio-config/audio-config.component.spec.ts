import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioConfigComponent } from './audio-config.component';

describe('AudioConfigComponent', () => {
  let component: AudioConfigComponent;
  let fixture: ComponentFixture<AudioConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudioConfigComponent]
    });
    fixture = TestBed.createComponent(AudioConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
