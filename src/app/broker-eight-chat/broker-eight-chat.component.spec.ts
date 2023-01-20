import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerEightChatComponent } from './broker-eight-chat.component';

describe('BrokerEightChatComponent', () => {
  let component: BrokerEightChatComponent;
  let fixture: ComponentFixture<BrokerEightChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerEightChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokerEightChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
