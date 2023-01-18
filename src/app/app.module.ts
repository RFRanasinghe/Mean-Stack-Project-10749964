import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
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
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path:'home-page', component: HomePageComponent },
      { path: 'register-page', component: RegisterPageComponent},
      { path: 'login-page', component: LoginPageComponent},
      { path: 'local-broker-page', component: LocalBrokerPageComponent},
      { path: 'global-broker-page', component: GlobalBrokerPageComponent},
      { path: 'history-page', component: HistoryPageComponent},
      { path: 'personal-profile-page', component: PersonalProfilePageComponent},
      { path: 'local-market-page', component: LocalMarketPageComponent},
      { path: 'global-market-page', component: GlobalMarketPageComponent },
      { path: 'western-province-page', component: WesternProvincePageComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
