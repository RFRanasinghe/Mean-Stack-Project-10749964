import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasternProvincePageComponent } from './eastern-province-page.component';

describe('EasternProvincePageComponent', () => {
  let component: EasternProvincePageComponent;
  let fixture: ComponentFixture<EasternProvincePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasternProvincePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EasternProvincePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
