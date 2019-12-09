import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageServicesComponent } from './home-page-services.component';

describe('HomePageServicesComponent', () => {
  let component: HomePageServicesComponent;
  let fixture: ComponentFixture<HomePageServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
