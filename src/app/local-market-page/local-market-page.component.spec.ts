import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalMarketPageComponent } from './local-market-page.component';

describe('LocalMarketPageComponent', () => {
  let component: LocalMarketPageComponent;
  let fixture: ComponentFixture<LocalMarketPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalMarketPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalMarketPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
