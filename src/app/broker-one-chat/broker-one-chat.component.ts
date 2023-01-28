import { Component, OnInit } from '@angular/core';
import { BrokerChatService } from '../services/broker-chat.service';
import { Router } from '@angular/router';

declare var LoadBroker1Content: () => any;
declare var Broker1Function: () => any;

@Component({
  selector: 'app-broker-one-chat',
  templateUrl: './broker-one-chat.component.html',
  styleUrls: ['./broker-one-chat.component.css']
})
export class BrokerOneChatComponent{

  constructor(private router: Router) {}

  navigateToHtml() {
    this.router.navigate(['socket/broker1.html']);
  }

  CallLoadBroker1Content() {
    LoadBroker1Content();
  }

  CallBroker1Function() {
    Broker1Function();
  }
}
