import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenteelandingpageComponent } from './menteelandingpage.component';

describe('MenteelandingpageComponent', () => {
  let component: MenteelandingpageComponent;
  let fixture: ComponentFixture<MenteelandingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenteelandingpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenteelandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
