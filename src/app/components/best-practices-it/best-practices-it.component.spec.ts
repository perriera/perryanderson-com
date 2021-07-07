/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BestPracticesItComponent } from './best-practices-it.component';

describe('BestPracticesItComponent', () => {
  let component: BestPracticesItComponent;
  let fixture: ComponentFixture<BestPracticesItComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestPracticesItComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestPracticesItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

