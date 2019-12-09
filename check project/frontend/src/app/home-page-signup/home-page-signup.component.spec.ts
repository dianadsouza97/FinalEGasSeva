import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageSignupComponent } from './home-page-signup.component';

describe('HomePageSignupComponent', () => {
  let component: HomePageSignupComponent;
  let fixture: ComponentFixture<HomePageSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
