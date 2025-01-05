import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeadingFrameComponent } from './beading-frame.component';

describe('BeadingFrameComponent', () => {
  let component: BeadingFrameComponent;
  let fixture: ComponentFixture<BeadingFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeadingFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeadingFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
