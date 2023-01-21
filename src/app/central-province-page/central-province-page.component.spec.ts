import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralProvincePageComponent } from './central-province-page.component';

describe('CentralProvincePageComponent', () => {
  let component: CentralProvincePageComponent;
  let fixture: ComponentFixture<CentralProvincePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralProvincePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralProvincePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
