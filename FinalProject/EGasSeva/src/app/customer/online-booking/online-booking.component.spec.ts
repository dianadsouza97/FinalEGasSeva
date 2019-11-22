import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineBookingComponent } from './online-booking.component';

describe('OnlineBookingComponent', () => {
  let component: OnlineBookingComponent;
  let fixture: ComponentFixture<OnlineBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
