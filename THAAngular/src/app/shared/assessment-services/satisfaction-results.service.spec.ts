import { TestBed } from '@angular/core/testing';

import { SatisfactionResultsService } from './satisfaction-results.service';

describe('SatisfactionResultsService', () => {
  let service: SatisfactionResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SatisfactionResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
