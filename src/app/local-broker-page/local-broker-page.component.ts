import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

declare var RegisterLoadContentFunction: () => any;
declare var RegisterProfileClick: () => any;
declare var LoginPageFunctionClick: () => any;
declare var LocalBrokerAlertFunction: () => any;
declare var GlobalBrokerPageFunctionClick: () => any;
declare var HistoryPageFunctionClick: () => any;
declare var PersonalProfileFunctionClick: () => any;
declare var HomeClickPageFunction: () => any;
declare var Broker1ChatClick: () => any;
declare var Broker2ChatClick: () => any;
declare var Broker3ChatClick: () => any;
declare var Broker4ChatClick: () => any;
declare var Broker5ChatClick: () => any;
declare var Broker6ChatClick: () => any;
declare var Broker7ChatClick: () => any;
declare var Broker8ChatClick: () => any;
declare var Broker9ChatClick: () => any;
@Component({
  selector: 'app-local-broker-page',
  templateUrl: './local-broker-page.component.html',
  styleUrls: ['./local-broker-page.component.css']
})
export class LocalBrokerPageComponent {

  blList: any;

  constructor(private apiService: ApiService) {

    this.getLB()
  }


  getLB() {

    this.apiService.getLocalBroker().subscribe({
      complete: () => {

       },
      error: (error) => {
        console.log(error)
       },
      next:(value)=> {
        this.blList = value
      },
    })
  }

  //content loading function
  CallRegisterLoadContentFunction(){
    RegisterLoadContentFunction();
  }

  CallRegisterProfileClick(){
    RegisterProfileClick();
  }

  CallLoginPageFunctionClick(){
    LoginPageFunctionClick();
  }

  CallLocalBrokerAlertFunction(){
    LocalBrokerAlertFunction();
  }

  CallGlobalBrokerPageFunctionClick(){
    GlobalBrokerPageFunctionClick();
  }

  CallHistoryPageFunctionClick(){
    HistoryPageFunctionClick();
  }

  CallPersonalProfileFunctionClick(){
    PersonalProfileFunctionClick();
  }

  CallHomeClickPageFunction(){
    HomeClickPageFunction();
  }

  CallBroker1ChatClick() {
    Broker1ChatClick();
  }

  CallBroker2ChatClick() {
    Broker2ChatClick();
  }

  CallBroker3ChatClick() {
    Broker3ChatClick();
  }

  CallBroker4ChatClick() {
    Broker4ChatClick();
  }

  CallBroker5ChatClick() {
    Broker5ChatClick();
  }

  CallBroker6ChatClick() {
    Broker6ChatClick();
  }

  CallBroker7ChatClick() {
    Broker7ChatClick();
  }

  CallBroker8ChatClick() {
    Broker8ChatClick();
  }

  CallBroker9ChatClick() {
    Broker9ChatClick();
  }
}

