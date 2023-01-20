import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerSixChatComponent } from './broker-six-chat.component';

describe('BrokerSixChatComponent', () => {
  let component: BrokerSixChatComponent;
  let fixture: ComponentFixture<BrokerSixChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerSixChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokerSixChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
