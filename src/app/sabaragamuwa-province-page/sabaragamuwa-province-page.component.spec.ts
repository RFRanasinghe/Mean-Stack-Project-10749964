import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabaragamuwaProvincePageComponent } from './sabaragamuwa-province-page.component';

describe('SabaragamuwaProvincePageComponent', () => {
  let component: SabaragamuwaProvincePageComponent;
  let fixture: ComponentFixture<SabaragamuwaProvincePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabaragamuwaProvincePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabaragamuwaProvincePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
