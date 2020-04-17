import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewthewholestoryComponent } from './newthewholestory.component';

describe('NewthewholestoryComponent', () => {
  let component: NewthewholestoryComponent;
  let fixture: ComponentFixture<NewthewholestoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewthewholestoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewthewholestoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
