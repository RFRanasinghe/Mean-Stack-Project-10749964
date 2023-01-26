import { Component, OnInit } from '@angular/core';
import { BrokerChatService } from '../services/broker-chat.service';

declare var LoadBroker1Content: () => any;

@Component({
  selector: 'app-broker-one-chat',
  templateUrl: './broker-one-chat.component.html',
  styleUrls: ['./broker-one-chat.component.css']
})
export class BrokerOneChatComponent{

  constructor(private brokerService: BrokerChatService) {}


  CallLoadBroker1Content() {
    LoadBroker1Content();
  }
}
