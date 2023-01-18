import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthProvincePageComponent } from './north-province-page.component';

describe('NorthProvincePageComponent', () => {
  let component: NorthProvincePageComponent;
  let fixture: ComponentFixture<NorthProvincePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NorthProvincePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NorthProvincePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
