import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmentorComponent } from './newmentor.component';

describe('NewmentorComponent', () => {
  let component: NewmentorComponent;
  let fixture: ComponentFixture<NewmentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewmentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
