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
declare var HomeMouseOver: () => any;
declare var HomeMouseOut: () => any;
declare var RegisterMouseOver: () => any;
declare var RegisterMouseOut: () => any;
declare var LoginMouseOver: () => any;
declare var LoginMouseOut: () => any;
declare var LocalBrokerMouseOver: () => any;
declare var LocalBrokerMouseOut: () => any;
declare var HistoryMouseOver: () => any;
declare var HistoryMouseOut: () => any;
declare var PersonalMouseOver: () => any;
declare var PersonalMouseOut: () => any;
declare var GlobalBrokerMouseOver: () => any;
declare var GlobalBrokerMouseOut: () => any;
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

  CallHomeMouseOver() {
    HomeMouseOver();
  }

  CallHomeMouseOut() {
    HomeMouseOut();
  }

  CallHomeClickPageFunction(){
    HomeClickPageFunction();
  }

  CallRegisterMouseOver() {
    RegisterMouseOver();
  }

  CallRegisterMouseOut() {
    RegisterMouseOut();
  }

  CallRegisterAlertFunction(){
    RegisterAlertFunction();
  }

  CallLoginMouseOver() {
    LoginMouseOver();
  }

  CallLoginMouseOut() {
    LoginMouseOut();
  }

  CallLoginPageFunctionClick(){
    LoginPageFunctionClick();
  }

  CallLocalBrokerMouseOver() {
    LocalBrokerMouseOver();
  }

  CallLocalBrokerMouseOut() {
    LocalBrokerMouseOut();
  }

  CallLocalBrokerPageFunctionClick(){
    LocalBrokerPageFunctionClick();
  }

  CallGlobalBrokerMouseOver() {
    GlobalBrokerMouseOver();
  }

  CallGlobalBrokerMouseOut() {
    GlobalBrokerMouseOut();
  }

  CallGlobalBrokerPageFunctionClick(){
    GlobalBrokerPageFunctionClick();
  }

  CallHistoryMouseOver() {
    HistoryMouseOver();
  }

  CallHistoryMouseOut() {
    HistoryMouseOut();
  }

  CallHistoryPageFunctionClick(){
    HistoryPageFunctionClick();
  }

  CallPersonalMouseOver() {
    PersonalMouseOver();
  }

  CallPersonalMouseOut() {
    PersonalMouseOut();
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
