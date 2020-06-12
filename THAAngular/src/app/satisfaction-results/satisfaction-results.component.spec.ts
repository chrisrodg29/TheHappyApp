import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatisfactionResultsComponent } from './satisfaction-results.component';

describe('SatisfactionResultsComponent', () => {
  let component: SatisfactionResultsComponent;
  let fixture: ComponentFixture<SatisfactionResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatisfactionResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatisfactionResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
