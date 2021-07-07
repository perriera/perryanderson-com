/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GofDesignPatternsComponent } from './gof-design-patterns.component';

describe('GofDesignPatternsComponent', () => {
  let component: GofDesignPatternsComponent;
  let fixture: ComponentFixture<GofDesignPatternsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GofDesignPatternsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GofDesignPatternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

