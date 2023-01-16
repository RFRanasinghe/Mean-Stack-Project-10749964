import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalBrokerPageComponent } from './global-broker-page.component';

describe('GlobalBrokerPageComponent', () => {
  let component: GlobalBrokerPageComponent;
  let fixture: ComponentFixture<GlobalBrokerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalBrokerPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalBrokerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
