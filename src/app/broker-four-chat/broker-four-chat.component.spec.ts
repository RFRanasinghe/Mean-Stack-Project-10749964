import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerFourChatComponent } from './broker-four-chat.component';

describe('BrokerFourChatComponent', () => {
  let component: BrokerFourChatComponent;
  let fixture: ComponentFixture<BrokerFourChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerFourChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokerFourChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
