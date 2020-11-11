import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatenewsignupComponent } from './affiliatenewsignup.component';

describe('AffiliatenewsignupComponent', () => {
  let component: AffiliatenewsignupComponent;
  let fixture: ComponentFixture<AffiliatenewsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffiliatenewsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliatenewsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
