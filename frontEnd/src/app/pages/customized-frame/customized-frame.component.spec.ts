import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedFrameComponent } from './customized-frame.component';

describe('CustomizedFrameComponent', () => {
  let component: CustomizedFrameComponent;
  let fixture: ComponentFixture<CustomizedFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomizedFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizedFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
