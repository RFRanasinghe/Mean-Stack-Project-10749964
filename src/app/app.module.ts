import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LocalBrokerPageComponent } from './local-broker-page/local-broker-page.component';
import { GlobalBrokerPageComponent } from './global-broker-page/global-broker-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { PersonalProfilePageComponent } from './personal-profile-page/personal-profile-page.component';
import { LocalMarketPageComponent } from './local-market-page/local-market-page.component';
import { GlobalMarketPageComponent } from './global-market-page/global-market-page.component';
import { WesternProvincePageComponent } from './western-province-page/western-province-page.component';
import { NorthProvincePageComponent } from './north-province-page/north-province-page.component';
import { BrokerOneChatComponent } from './broker-one-chat/broker-one-chat.component';
import { BrokerTwoChatComponent } from './broker-two-chat/broker-two-chat.component';
import { BrokerThreeChatComponent } from './broker-three-chat/broker-three-chat.component';
import { BrokerFourChatComponent } from './broker-four-chat/broker-four-chat.component';
import { BrokerFiveChatComponent } from './broker-five-chat/broker-five-chat.component';
import { BrokerSixChatComponent } from './broker-six-chat/broker-six-chat.component';
import { BrokerSevenChatComponent } from './broker-seven-chat/broker-seven-chat.component';
import { BrokerEightChatComponent } from './broker-eight-chat/broker-eight-chat.component';
import { BrokerNineChatComponent } from './broker-nine-chat/broker-nine-chat.component';
import { CentralProvincePageComponent } from './central-province-page/central-province-page.component';
import { NorthCentalProPageComponent } from './north-cental-pro-page/north-cental-pro-page.component';
import { EasternProvincePageComponent } from './eastern-province-page/eastern-province-page.component';
import { NorthWesternPageComponent } from './north-western-page/north-western-page.component';
import { SouthernProvicePageComponent } from './southern-provice-page/southern-provice-page.component';
import { UvaProvincePageComponent } from './uva-province-page/uva-province-page.component';
import { BrokerComponent } from './broker/broker.component';
import { SabaragamuwaProvincePageComponent } from './sabaragamuwa-province-page/sabaragamuwa-province-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegisterPageComponent,
    LoginPageComponent,
    LocalBrokerPageComponent,
    GlobalBrokerPageComponent,
    HistoryPageComponent,
    PersonalProfilePageComponent,
    LocalMarketPageComponent,
    GlobalMarketPageComponent,
    WesternProvincePageComponent,
    NorthProvincePageComponent,
    BrokerOneChatComponent,
    BrokerTwoChatComponent,
    BrokerThreeChatComponent,
    BrokerFourChatComponent,
    BrokerFiveChatComponent,
    BrokerSixChatComponent,
    BrokerSevenChatComponent,
    BrokerEightChatComponent,
    BrokerNineChatComponent,
    CentralProvincePageComponent,
    NorthCentalProPageComponent,
    EasternProvincePageComponent,
    NorthWesternPageComponent,
    SouthernProvicePageComponent,
    UvaProvincePageComponent,
    BrokerComponent,
    SabaragamuwaProvincePageComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path:'', component: HomePageComponent },
      { path: 'register-page', component: RegisterPageComponent},
      { path: 'login-page', component: LoginPageComponent},
      { path: 'local-broker-page', component: LocalBrokerPageComponent},
      { path: 'global-broker-page', component: GlobalBrokerPageComponent},
      { path: 'history-page', component: HistoryPageComponent},
      { path: 'personal-profile-page', component: PersonalProfilePageComponent},
      { path: 'local-market-page', component: LocalMarketPageComponent},
      { path: 'global-market-page', component: GlobalMarketPageComponent },
      { path: 'western-province-page', component: WesternProvincePageComponent },
      { path: 'north-province-page', component: NorthProvincePageComponent },
      { path: 'broker-one-chat', component: BrokerOneChatComponent },
      { path: 'broker-two-chat', component: BrokerTwoChatComponent },
      { path: 'broker-three-chat', component: BrokerThreeChatComponent },
      { path: 'broker-four-chat', component: BrokerFourChatComponent },
      { path: 'broker-five-chat', component: BrokerFiveChatComponent },
      { path: 'broker-six-chat', component: BrokerSixChatComponent },
      { path: 'broker-seven-chat', component: BrokerSevenChatComponent },
      { path: 'broker-eight-chat', component: BrokerEightChatComponent },
      { path: 'broker-nine-chat', component: BrokerNineChatComponent },
      { path: 'central-province-page', component: CentralProvincePageComponent },
      { path: 'north-central-pro-page', component: NorthCentalProPageComponent },
      { path: 'eastern-province-page', component: EasternProvincePageComponent },
      { path: 'north-western-page', component: NorthWesternPageComponent },
      { path: 'southern-provice-page', component: SouthernProvicePageComponent },
      { path: 'uva-province-page', component: UvaProvincePageComponent },
      { path: 'broker/:type', component: BrokerComponent },
      { path: 'sabaragamuwa-province-page', component: SabaragamuwaProvincePageComponent},
    ]),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
