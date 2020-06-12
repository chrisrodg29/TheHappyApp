import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyListComponent } from './happy-list.component';

describe('HappyListComponent', () => {
  let component: HappyListComponent;
  let fixture: ComponentFixture<HappyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HappyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HappyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
