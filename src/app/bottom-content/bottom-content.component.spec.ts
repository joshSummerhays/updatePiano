/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BottomContentComponent } from './bottom-content.component';

describe('BottomContentComponent', () => {
  let component: BottomContentComponent;
  let fixture: ComponentFixture<BottomContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
