import { TestBed } from '@angular/core/testing';

import { SatisfactionAssessmentService } from './satisfaction-assessment.service';

describe('SatisfactionAssessmentService', () => {
  let service: SatisfactionAssessmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SatisfactionAssessmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
