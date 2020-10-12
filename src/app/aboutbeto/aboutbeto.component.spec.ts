import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutbetoComponent } from './aboutbeto.component';

describe('AboutbetoComponent', () => {
  let component: AboutbetoComponent;
  let fixture: ComponentFixture<AboutbetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutbetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutbetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
