import { Component } from '@angular/core';

declare var LoadBroker2Content: () => any;
@Component({
  selector: 'app-broker-two-chat',
  templateUrl: './broker-two-chat.component.html',
  styleUrls: ['./broker-two-chat.component.css']
})
export class BrokerTwoChatComponent {

  CallLoadBroker2Content() {
    LoadBroker2Content();
  }
}
