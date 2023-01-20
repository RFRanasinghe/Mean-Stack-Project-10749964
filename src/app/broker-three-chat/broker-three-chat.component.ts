import { Component } from '@angular/core';

declare var LoadBroker3Content: () => any;

@Component({
  selector: 'app-broker-three-chat',
  templateUrl: './broker-three-chat.component.html',
  styleUrls: ['./broker-three-chat.component.css']
})
export class BrokerThreeChatComponent {

  CallLoadBroker3Content() {
    LoadBroker3Content();
  }
}
