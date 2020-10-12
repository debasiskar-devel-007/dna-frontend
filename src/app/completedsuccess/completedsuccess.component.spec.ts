import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedsuccessComponent } from './completedsuccess.component';

describe('CompletedsuccessComponent', () => {
  let component: CompletedsuccessComponent;
  let fixture: ComponentFixture<CompletedsuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedsuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
