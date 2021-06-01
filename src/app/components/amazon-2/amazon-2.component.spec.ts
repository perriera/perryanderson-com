/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Amazon2Component } from './amazon-2.component';

describe('Amazon2Component', () => {
  let component: Amazon2Component;
  let fixture: ComponentFixture<Amazon2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Amazon2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Amazon2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

