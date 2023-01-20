import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerSevenChatComponent } from './broker-seven-chat.component';

describe('BrokerSevenChatComponent', () => {
  let component: BrokerSevenChatComponent;
  let fixture: ComponentFixture<BrokerSevenChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerSevenChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokerSevenChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
