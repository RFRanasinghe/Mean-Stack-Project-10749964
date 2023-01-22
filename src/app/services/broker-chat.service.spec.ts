import { TestBed } from '@angular/core/testing';

import { BrokerChatService } from './broker-chat.service';

describe('BrokerChatService', () => {
  let service: BrokerChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrokerChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
