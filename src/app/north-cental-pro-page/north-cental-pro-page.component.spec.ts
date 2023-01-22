import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthCentalProPageComponent } from './north-cental-pro-page.component';

describe('NorthCentalProPageComponent', () => {
  let component: NorthCentalProPageComponent;
  let fixture: ComponentFixture<NorthCentalProPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NorthCentalProPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NorthCentalProPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
