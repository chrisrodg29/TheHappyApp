import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatisfactionAssessmentComponent } from './satisfaction-assessment.component';

describe('SatisfactionAssessmentComponent', () => {
  let component: SatisfactionAssessmentComponent;
  let fixture: ComponentFixture<SatisfactionAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatisfactionAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatisfactionAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
