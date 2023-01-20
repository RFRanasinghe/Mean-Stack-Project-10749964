import { Component } from '@angular/core';

declare var LoadBroker5Content: () => any;
@Component({
  selector: 'app-broker-five-chat',
  templateUrl: './broker-five-chat.component.html',
  styleUrls: ['./broker-five-chat.component.css']
})
export class BrokerFiveChatComponent {

  CallLoadBroker5Content() {
    LoadBroker5Content();
  }
}
