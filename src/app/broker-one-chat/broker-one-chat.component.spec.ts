import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerOneChatComponent } from './broker-one-chat.component';

describe('BrokerOneChatComponent', () => {
  let component: BrokerOneChatComponent;
  let fixture: ComponentFixture<BrokerOneChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerOneChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokerOneChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
