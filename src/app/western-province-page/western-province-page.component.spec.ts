import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WesternProvincePageComponent } from './western-province-page.component';

describe('WesternProvincePageComponent', () => {
  let component: WesternProvincePageComponent;
  let fixture: ComponentFixture<WesternProvincePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WesternProvincePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WesternProvincePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
