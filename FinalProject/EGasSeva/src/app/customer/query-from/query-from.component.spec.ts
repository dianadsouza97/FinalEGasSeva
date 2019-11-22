import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryFromComponent } from './query-from.component';

describe('QueryFromComponent', () => {
  let component: QueryFromComponent;
  let fixture: ComponentFixture<QueryFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
