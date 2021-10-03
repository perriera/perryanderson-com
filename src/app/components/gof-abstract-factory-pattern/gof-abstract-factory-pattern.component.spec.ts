/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GofAbstractFactoryPatternComponent } from './gof-abstract-factory-pattern.component';

describe('GofAbstractFactoryPatternComponent', () => {
  let component: GofAbstractFactoryPatternComponent;
  let fixture: ComponentFixture<GofAbstractFactoryPatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GofAbstractFactoryPatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GofAbstractFactoryPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

