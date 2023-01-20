import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerNineChatComponent } from './broker-nine-chat.component';

describe('BrokerNineChatComponent', () => {
  let component: BrokerNineChatComponent;
  let fixture: ComponentFixture<BrokerNineChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerNineChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokerNineChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
