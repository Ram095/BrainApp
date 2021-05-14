import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShlokasComponent } from './shlokas.component';

describe('ShlokasComponent', () => {
  let component: ShlokasComponent;
  let fixture: ComponentFixture<ShlokasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShlokasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShlokasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
