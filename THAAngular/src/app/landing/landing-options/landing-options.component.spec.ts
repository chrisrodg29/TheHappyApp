import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingOptionsComponent } from './landing-options.component';

describe('LandingOptionsComponent', () => {
  let component: LandingOptionsComponent;
  let fixture: ComponentFixture<LandingOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
