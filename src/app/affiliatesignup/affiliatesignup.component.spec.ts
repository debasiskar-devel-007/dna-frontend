import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatesignupComponent } from './affiliatesignup.component';

describe('AffiliatesignupComponent', () => {
  let component: AffiliatesignupComponent;
  let fixture: ComponentFixture<AffiliatesignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffiliatesignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliatesignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
