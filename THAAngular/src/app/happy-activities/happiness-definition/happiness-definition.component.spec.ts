import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HappinessDefinitionComponent } from './happiness-definition.component';

describe('HappinessDefinitionComponent', () => {
  let component: HappinessDefinitionComponent;
  let fixture: ComponentFixture<HappinessDefinitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HappinessDefinitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HappinessDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
