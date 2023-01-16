import { Component } from '@angular/core';

declare var HomeLoadFunction: () => any;
declare var HomeAlertFunction: () => any;
declare var RegisterProfileClick: () => any;
declare var LoginPageFunctionClick: () => any;
declare var LocalBrokerPageFunctionClick: () => any;
declare var GlobalBrokerPageFunctionClick: () => any;
declare var HistoryPageFunctionClick: () => any;
declare var PersonalProfileFunctionClick: () => any;
declare var LocalMarketPageFunctionClick: () => any;
declare var GlobalMarketPageFunctionClick: () => any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  //content loading function
  CallHomeLoadFunction(){
    HomeLoadFunction();
  }

  //alert function
  CallHomeAlertFunction(){
    HomeAlertFunction();
  }

  //directing page function from home-page to register-page
  CallRegisterProfileClick(){
    RegisterProfileClick();
  }

  //directing page function from home-page to login-page
  CallLoginPageFunctionClick(){
    LoginPageFunctionClick();
  }

  //directing page function from home-page to localBroker-page
  CallLocalBrokerPageFunctionClick(){
    LocalBrokerPageFunctionClick();
  }

  //directing page function from home-page to globalBroker-page
  CallGlobalBrokerPageFunctionClick(){
    GlobalBrokerPageFunctionClick();
  }

  //directing page function from home-page to history-page
  CallHistoryPageFunctionClick(){
    HistoryPageFunctionClick();
  }

  //directing page function from home-page to personalProfile-page
  CallPersonalProfileFunctionClick(){
    PersonalProfileFunctionClick();
  }

  //directing page function from home-page to local-market-page
  CallLocalMarketPageFunctionClick(){
    LocalMarketPageFunctionClick();
  }

  //directing page function from home-page to global-market-page
  CallGlobalMarketPageFunctionClick(){
    GlobalMarketPageFunctionClick();
  }
}
