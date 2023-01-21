import { Component, OnInit } from '@angular/core';

declare var LoadBroker1Content: () => any;

@Component({
  selector: 'app-broker-one-chat',
  templateUrl: './broker-one-chat.component.html',
  styleUrls: ['./broker-one-chat.component.css']
})
export class BrokerOneChatComponent {
  CallLoadBroker1Content() {
    LoadBroker1Content();
  }
}
