import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerFiveChatComponent } from './broker-five-chat.component';

describe('BrokerFiveChatComponent', () => {
  let component: BrokerFiveChatComponent;
  let fixture: ComponentFixture<BrokerFiveChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerFiveChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokerFiveChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
