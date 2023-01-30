import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { map } from 'rxjs/operators';

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

  registerList : any;

  fName: string = ""
  lname: string = ""
  mail: string = ""
  uname: string = ""
  address: string = ""
  city: string = ""
  country: string = ""
  postalCode: string = ""

  constructor(private apiService: ApiService) {
    this.apiService.register(this.fName).subscribe((data) => {
      this.registerList = data;
    });
  }

  register() {
    var data ={
      fName: this.fName,
      lName: this.lname,
      mail: this.mail,
      uname: this.uname,
      address: this.address,
      city: this.city,
      country: this.country,
      postalCode: this.postalCode
    }
    this.apiService.register(data).subscribe
  }

  getRegisterFormData(data: any) {

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
