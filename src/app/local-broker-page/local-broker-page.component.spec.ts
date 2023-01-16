import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalBrokerPageComponent } from './local-broker-page.component';

describe('LocalBrokerPageComponent', () => {
  let component: LocalBrokerPageComponent;
  let fixture: ComponentFixture<LocalBrokerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalBrokerPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalBrokerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
