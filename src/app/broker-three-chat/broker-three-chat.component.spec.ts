import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerThreeChatComponent } from './broker-three-chat.component';

describe('BrokerThreeChatComponent', () => {
  let component: BrokerThreeChatComponent;
  let fixture: ComponentFixture<BrokerThreeChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerThreeChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokerThreeChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
