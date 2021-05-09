import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesNoOptionComponent } from './yes-no-option.component';

describe('YesNoOptionComponent', () => {
  let component: YesNoOptionComponent;
  let fixture: ComponentFixture<YesNoOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YesNoOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YesNoOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
