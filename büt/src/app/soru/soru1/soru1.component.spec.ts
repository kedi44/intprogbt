/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Soru1Component } from './soru1.component';

describe('Soru1Component', () => {
  let component: Soru1Component;
  let fixture: ComponentFixture<Soru1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Soru1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Soru1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
