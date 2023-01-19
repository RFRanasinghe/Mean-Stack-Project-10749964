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
declare var HomeMouseOver: () => any;
declare var HomeMouseOut: () => any;
declare var RegisterMouseOver: () => any;
declare var RegisterMouseOut: () => any;
declare var LoginMouseOver: () => any;
declare var LoginMouseOut: () => any;
declare var LocalBrokerMouseOver: () => any;
declare var LocalBrokerMouseOut: () => any;
declare var GlobalBrokerMouseOver: () => any;
declare var GlobalBrokerMouseOut: () => any;
declare var HistoryMouseOver: () => any;
declare var HistoryMouseOut: () => any;
declare var PersonalMouseOut: () => any;
declare var PersonalMouseOver: () => any;
declare var LocalMouseOver: () => any;
declare var LocalMouseOut: () => any;
declare var GlobalMouseOver: () => any;
declare var GlobalMouseOut: () => any;
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

  CallHomeMouseOver() {
    HomeMouseOver();
  }

  CallHomeMouseOut() {
    HomeMouseOut();
  }

  CallRegisterMouseOver() {
    RegisterMouseOver();
  }

  CallRegisterMouseOut() {
    RegisterMouseOut();
  }

  CallLoginMouseOver() {
    LoginMouseOver();
  }

  CallLoginMouseOut() {
    LoginMouseOut();
  }

  CallLocalBrokerMouseOver() {
    LocalBrokerMouseOver();
  }

  CallLocalBrokerMouseOut() {
    LocalBrokerMouseOut();
  }

  CallGlobalBrokerMouseOver() {
    GlobalBrokerMouseOver();
  }

  CallGlobalBrokerMouseOut() {
    GlobalBrokerMouseOut();
  }

  CallHistoryMouseOver() {
    HistoryMouseOver();
  }

  CallHistoryMouseOut() {
    HistoryMouseOut();
  }

  CallPersonalMouseOver() {
    PersonalMouseOver();
  }

  CallPersonalMouseOut() {
    PersonalMouseOut();
  }

  CallLocalMouseOver() {
    LocalMouseOver();
  }

  CallLocalMouseOut() {
    LocalMouseOut();
  }

  CallGlobalMouseOver() {
    GlobalMouseOver();
  }

  CallGlobalMouseOut() {
    GlobalMouseOut();
  }
}
