import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewaboutbetoComponent } from './newaboutbeto.component';

describe('NewaboutbetoComponent', () => {
  let component: NewaboutbetoComponent;
  let fixture: ComponentFixture<NewaboutbetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewaboutbetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewaboutbetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
