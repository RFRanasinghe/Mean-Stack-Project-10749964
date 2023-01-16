import { Component } from '@angular/core';

declare var GlobalBrokerPageLoadFunction: () => any;
declare var HomeClickPageFunction: () => any;
declare var RegisterProfileClick: () => any;
declare var LoginPageFunctionClick: () => any;
declare var LocalBrokerAlertFunction: () => any;
declare var GlobalBrokerPageFunctionClick: () => any;
declare var HistoryPageFunctionClick: () => any;
declare var PersonalProfileFunctionClick: () => any;

@Component({
  selector: 'app-global-broker-page',
  templateUrl: './global-broker-page.component.html',
  styleUrls: ['./global-broker-page.component.css']
})
export class GlobalBrokerPageComponent {

  //calling function to load content of the page
  CallGlobalBrokerPageLoadFunction(){
    GlobalBrokerPageLoadFunction();
  }

  //calling function of button click event directs from global-broker-page to home page
  CallHomeClickPageFunction(){
    HomeClickPageFunction();
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
}
