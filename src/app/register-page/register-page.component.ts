import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

declare var RegisterLoadFunction: () => any;
declare var HomeClickPageFunction: () => any;
declare var RegisterAlertFunction: () => any;
declare var LoginPageFunctionClick: () => any;
declare var LocalBrokerPageFunctionClick: () => any;
declare var GlobalBrokerPageFunctionClick: () => any;
declare var HistoryPageFunctionClick: () => any;
declare var PersonalProfileFunctionClick: () => any;
declare var RegisterFormValidation: () => any;

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {


  fName: string = ""

  constructor(private apiService: ApiService) {

  }

  register() {
    var data ={
        fName: this.fName

    }
    this.apiService.register(data).subscribe
  }

  CallRegisterLoadFunction(){
    RegisterLoadFunction();
  }

  CallHomeClickPageFunction(){
    HomeClickPageFunction();
  }

  CallRegisterAlertFunction(){
    RegisterAlertFunction();
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

  CallRegisterFormValidation(){
    RegisterFormValidation();
  }
}
