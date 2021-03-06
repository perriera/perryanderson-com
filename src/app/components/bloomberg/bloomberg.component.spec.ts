/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BloombergComponent } from './bloomberg.component';

describe('BloombergComponent', () => {
  let component: BloombergComponent;
  let fixture: ComponentFixture<BloombergComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloombergComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloombergComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

