import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsuccessgeneticsComponent } from './newsuccessgenetics.component';

describe('NewsuccessgeneticsComponent', () => {
  let component: NewsuccessgeneticsComponent;
  let fixture: ComponentFixture<NewsuccessgeneticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsuccessgeneticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsuccessgeneticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
