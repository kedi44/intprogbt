/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SorusilmeComponent } from './sorusilme.component';

describe('SorusilmeComponent', () => {
  let component: SorusilmeComponent;
  let fixture: ComponentFixture<SorusilmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorusilmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorusilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
