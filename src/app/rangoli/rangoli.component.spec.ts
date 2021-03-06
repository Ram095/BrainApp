import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangoliComponent } from './rangoli.component';

describe('RangoliComponent', () => {
  let component: RangoliComponent;
  let fixture: ComponentFixture<RangoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangoliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
