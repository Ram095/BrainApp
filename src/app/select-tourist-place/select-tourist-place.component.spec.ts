import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTouristPlaceComponent } from './select-tourist-place.component';

describe('SelectTouristPlaceComponent', () => {
  let component: SelectTouristPlaceComponent;
  let fixture: ComponentFixture<SelectTouristPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectTouristPlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTouristPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
