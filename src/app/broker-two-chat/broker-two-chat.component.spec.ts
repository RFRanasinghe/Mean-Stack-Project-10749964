import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerTwoChatComponent } from './broker-two-chat.component';

describe('BrokerTwoChatComponent', () => {
  let component: BrokerTwoChatComponent;
  let fixture: ComponentFixture<BrokerTwoChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerTwoChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokerTwoChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
