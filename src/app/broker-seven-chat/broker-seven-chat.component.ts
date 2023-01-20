import { Component } from '@angular/core';

declare var LoadBroker7Content: () => any;
@Component({
  selector: 'app-broker-seven-chat',
  templateUrl: './broker-seven-chat.component.html',
  styleUrls: ['./broker-seven-chat.component.css']
})
export class BrokerSevenChatComponent {

  CallLoadBroker7Content() {
    LoadBroker7Content();
  }
}
