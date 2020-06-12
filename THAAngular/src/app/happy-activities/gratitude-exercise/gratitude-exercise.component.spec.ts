import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GratitudeExerciseComponent } from './gratitude-exercise.component';

describe('GratitudeExerciseComponent', () => {
  let component: GratitudeExerciseComponent;
  let fixture: ComponentFixture<GratitudeExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GratitudeExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GratitudeExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
