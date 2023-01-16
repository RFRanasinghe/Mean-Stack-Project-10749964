import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalMarketPageComponent } from './global-market-page.component';

describe('GlobalMarketPageComponent', () => {
  let component: GlobalMarketPageComponent;
  let fixture: ComponentFixture<GlobalMarketPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalMarketPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalMarketPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
