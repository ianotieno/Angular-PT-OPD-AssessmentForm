import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assessmentform } from './assessment-form';

describe('Assessmentform', () => {
  let component: Assessmentform;
  let fixture: ComponentFixture<Assessmentform>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Assessmentform]
    });
    fixture = TestBed.createComponent(Assessmentform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
