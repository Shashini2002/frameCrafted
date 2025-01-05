import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedPhotoFrameComponent } from './customized-photo-frame.component';

describe('CustomizedPhotoFrameComponent', () => {
  let component: CustomizedPhotoFrameComponent;
  let fixture: ComponentFixture<CustomizedPhotoFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomizedPhotoFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizedPhotoFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
