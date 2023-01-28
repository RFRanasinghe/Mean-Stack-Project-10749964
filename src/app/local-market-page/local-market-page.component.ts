import { Component } from '@angular/core';

declare var LocalMarketPageLoadFunction: () => any;
declare var RegisterProfileClick: () => any;
declare var LoginPageFunctionClick: () => any;
declare var LocalBrokerPageFunctionClick: () => any;
declare var GlobalBrokerPageFunctionClick: () => any;
declare var HistoryPageFunctionClick: () => any;
declare var PersonalProfileFunctionClick: () => any;
declare var DirectWesternProvinceFunctionClick: () => any;
declare var NorthCentralProvinceClick: () => any;
declare var NorthernProvinceClick: () => any;
declare var EasternProvinceClick: () => any;
declare var HomeMouseOver: () => any;
declare var HomeMouseOut: () => any;
declare var RegisterMouseOver: () => any;
declare var LoginMouseOver: () => any;
declare var LoginMouseOut: () => any;
declare var LocalBrokerMouseOver: () => any;
declare var LocalBrokerMouseOut: () => any;
declare var GlobalBrokerMouseOver: () => any;
declare var GlobalBrokerMouseOut: () => any;
declare var HistoryMouseOver: () => any;
declare var HistoryMouseOut: () => any;
declare var PersonalMouseOver: () => any;
declare var PersonalMouseOver: () => any;
declare var PersonalMouseOut: () => any;
declare var CentralMouseOver: () => any;
declare var CentralMouseOut: () => any;
declare var northCentralMouseOver: () => any;
declare var northCentralMouseOut: () => any;
declare var northernMouseOver: () => any;
declare var northernMouseOut: () => any;
declare var southernMouseOver: () => any;
declare var easternMouseOver: () => any;
declare var easternMouseOut: () => any;
declare var northWesternMouseOver: () => any;
declare var northWesternMouseOut: () => any;
declare var southernMouseOut: () => any;
declare var CentralProvinceClick: () => any;
declare var uvaMouseOver: () => any;
declare var uvaMouseOut: () => any;
declare var sabaMouseOver: () => any;
declare var sabaMouseOut: () => any;
declare var WesternMouseOver: () => any;
declare var WesternMouseOut: () => any;
declare var NorthWesternClick: () => any;

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

  CallDirectWesternProvinceFunctionClick() {
    DirectWesternProvinceFunctionClick();
  }

  CallNorthCentralProvinceClick() {
    NorthCentralProvinceClick();
  }

   CallNorthernProvinceClick() {
    NorthernProvinceClick();
  }

  CallEasternProvinceClick() {
    EasternProvinceClick();
  }

  CallNorthWesternClick() {
    NorthWesternClick();
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

  CallCentralMouseOver() {
    CentralMouseOver();
  }

  CallCentralMouseOut() {
    CentralMouseOut();
  }

  CallnorthCentralMouseOver() {
    northCentralMouseOver();
  }

  CallnorthCentralMouseOut() {
    northCentralMouseOut();
  }

  CallnorthernMouseOver() {
    northernMouseOver();
  }

  CallnorthernMouseOut() {
    northernMouseOut();
  }

  CalleasternMouseOver() {
    easternMouseOver();
  }

  CalleasternMouseOut() {
    easternMouseOut();
  }

  CallsouthernMouseOver() {
    southernMouseOver();
  }

  CallsouthernMouseOut() {
    southernMouseOut();
  }

  CallnorthWesternMouseOver() {
    northWesternMouseOver();
  }

  CallnorthWesternMouseOut() {
    northWesternMouseOut();
  }

  CallCentralProvinceClick() {
    CentralProvinceClick();
  }

  CalluvaMouseOver() {
    uvaMouseOver();
  }

  CalluvaMouseOut() {
    uvaMouseOut();
  }

  CallsabaMouseOver() {
    sabaMouseOver();
  }

  CallsabaMouseOut() {
    sabaMouseOut();
  }

  CallWesternMouseOver() {
    WesternMouseOver();
  }

  CallWesternMouseOut() {
    WesternMouseOut();
  }
}
