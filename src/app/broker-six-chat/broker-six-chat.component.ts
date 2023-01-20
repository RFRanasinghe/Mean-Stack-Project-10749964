import { Component } from '@angular/core';

declare var LoadBroker6Content: () => any;
@Component({
  selector: 'app-broker-six-chat',
  templateUrl: './broker-six-chat.component.html',
  styleUrls: ['./broker-six-chat.component.css']
})
export class BrokerSixChatComponent {

  CallLoadBroker6Content() {
    LoadBroker6Content();
  }
}
