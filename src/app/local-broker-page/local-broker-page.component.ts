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
}

