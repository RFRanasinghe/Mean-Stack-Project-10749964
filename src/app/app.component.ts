import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { BrokerChatService } from './services/broker-chat.service';
import * as socketIo from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  posts: any;
  title = 'StockMarket-site';

}
