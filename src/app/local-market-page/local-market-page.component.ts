import { Component } from '@angular/core';

declare var LocalMarketPageLoadFunction: () => any;
declare var RegisterProfileClick: () => any;
declare var LoginPageFunctionClick: () => any;
declare var LocalBrokerPageFunctionClick: () => any;
declare var GlobalBrokerPageFunctionClick: () => any;
declare var HistoryPageFunctionClick: () => any;
declare var PersonalProfileFunctionClick: () => any;

@Component({
  selector: 'app-local-market-page',
  templateUrl: './local-market-page.component.html',
  styleUrls: ['./local-market-page.component.css']
})
export class LocalMarketPageComponent {

  CallLocalMarketPageLoadFunction(){
    LocalMarketPageLoadFunction();
  }

  CallRegisterProfileClick(){
    RegisterProfileClick();
  }

  CallLoginPageFunctionClick(){
    LoginPageFunctionClick();
  }

  CallLocalBrokerPageFunctionClick(){
    LocalBrokerPageFunctionClick();
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
