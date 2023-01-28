import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UvaProvincePageComponent } from './uva-province-page.component';

describe('UvaProvincePageComponent', () => {
  let component: UvaProvincePageComponent;
  let fixture: ComponentFixture<UvaProvincePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UvaProvincePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UvaProvincePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
