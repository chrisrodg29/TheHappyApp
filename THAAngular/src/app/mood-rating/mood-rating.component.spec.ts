import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodRatingComponent } from './mood-rating.component';

describe('MoodRatingComponent', () => {
  let component: MoodRatingComponent;
  let fixture: ComponentFixture<MoodRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoodRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
