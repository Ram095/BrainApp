import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundIdentifyComponent } from './sound-identify.component';

describe('SoundIdentifyComponent', () => {
  let component: SoundIdentifyComponent;
  let fixture: ComponentFixture<SoundIdentifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundIdentifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundIdentifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
