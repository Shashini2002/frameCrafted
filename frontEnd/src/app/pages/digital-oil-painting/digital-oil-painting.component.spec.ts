import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalOilPaintingComponent } from './digital-oil-painting.component';

describe('DigitalOilPaintingComponent', () => {
  let component: DigitalOilPaintingComponent;
  let fixture: ComponentFixture<DigitalOilPaintingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalOilPaintingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalOilPaintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
