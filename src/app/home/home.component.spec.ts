/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomeComponent } from './home.component';
import { HeaderComponent } from '../header/header.component';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';
import { TopContentComponent } from '../top-content/top-content.component';
import { BottomContentComponent } from '../bottom-content/bottom-content.component';
import { FooterComponent } from '../footer/footer.component';
import { MiddleContentComponent } from '../middle-content/middle-content.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HomeComponent,
        HeaderComponent,
        BreadcrumbsComponent,
        TopContentComponent,
        BottomContentComponent,
        FooterComponent,
        MiddleContentComponent
         ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
