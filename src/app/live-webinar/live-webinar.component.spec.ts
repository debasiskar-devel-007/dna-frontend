import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveWebinarComponent } from './live-webinar.component';

describe('LiveWebinarComponent', () => {
  let component: LiveWebinarComponent;
  let fixture: ComponentFixture<LiveWebinarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveWebinarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveWebinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
