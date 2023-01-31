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

  }

  register() {

    var data ={
      first_name: this.fName,
      last_name: this.lname,
      email_address: this.mail,
      username: this.uname,
      address: this.address,
      city: this.city,
      country: this.country,
      postal_code: this.postalCode
    }
    console.log(data);
    this.apiService.register(data).subscribe(data => {
      console.log("Success | "+data);
    }, err => {
      console.log(err);
    })
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
    var isValid = RegisterFormValidation();
    if (isValid) {
      this.register();
    }
  }
}
