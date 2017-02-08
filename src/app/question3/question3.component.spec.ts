/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Question3Component } from './question3.component';

describe('Question3Component', () => {
  let component: Question3Component;
  let fixture: ComponentFixture<Question3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
