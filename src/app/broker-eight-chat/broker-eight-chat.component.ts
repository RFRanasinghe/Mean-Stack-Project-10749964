import { Component } from '@angular/core';

declare var LoadBroker8Content: () => any;
@Component({
  selector: 'app-broker-eight-chat',
  templateUrl: './broker-eight-chat.component.html',
  styleUrls: ['./broker-eight-chat.component.css']
})
export class BrokerEightChatComponent {

  CallLoadBroker8Content() {
    LoadBroker8Content();
  }
}
