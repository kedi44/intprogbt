/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YöneticiComponent } from './yönetici.component';

describe('YöneticiComponent', () => {
  let component: YöneticiComponent;
  let fixture: ComponentFixture<YöneticiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YöneticiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YöneticiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
