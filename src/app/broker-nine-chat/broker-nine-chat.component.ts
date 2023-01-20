import { Component } from '@angular/core';

declare var LoadBroker9Content: () => any;
@Component({
  selector: 'app-broker-nine-chat',
  templateUrl: './broker-nine-chat.component.html',
  styleUrls: ['./broker-nine-chat.component.css']
})
export class BrokerNineChatComponent {

  CallLoadBroker9Content() {
    LoadBroker9Content();
  }
}
