import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import io from "socket.io-client";

const ChatUrl = "ws://localhost:3000";

export interface Message{
  source: string;
  content: string;
}
@Injectable({
  providedIn: 'root'
})

export class BrokerChatService {

}
