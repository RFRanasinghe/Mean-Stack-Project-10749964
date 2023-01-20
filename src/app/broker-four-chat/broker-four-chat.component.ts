import { Component } from '@angular/core';

declare var LoadBroker4Content: () => any;

@Component({
  selector: 'app-broker-four-chat',
  templateUrl: './broker-four-chat.component.html',
  styleUrls: ['./broker-four-chat.component.css']
})
export class BrokerFourChatComponent {

  CallLoadBroker4Content() {
    LoadBroker4Content();
  }
}
