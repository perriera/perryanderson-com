/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Crc32BitCollisionComponent } from './crc-32bit-collision.component';

describe('Crc32BitCollisionComponent', () => {
  let component: Crc32BitCollisionComponent;
  let fixture: ComponentFixture<Crc32BitCollisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Crc32BitCollisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Crc32BitCollisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

