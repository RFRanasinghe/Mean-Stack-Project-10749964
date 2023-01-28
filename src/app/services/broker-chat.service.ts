import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import io from "socket.io-client";
@Injectable({
  providedIn: 'root'
})

export class BrokerChatService {
  private url = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }
}
