import { Component, OnInit } from '@angular/core';

declare var LoginContent: () => any;
declare var AndriaProfile: () => any;

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  email: string = ""
  username: string = ""

  constructor(){}

ngOnInit(){

}

  CallAndriaProfile() {
    AndriaProfile();
  }

  LoginUser() {
    if (this.email == "andriawayetta777@yahoo.com" && this.username == "andriawayetta")
    {
      console.log("Welcome Andria");
      this.CallAndriaProfile();
      //document.write("Welcome Andria");
    }
    if (this.email == "dissanayake@gmail.com" && this.username == "Nanushika")
    {
      console.log("Welcome Anushika");
    }
    if (this.email == "khurana@gmail.com" && this.username == "ayushmankhurana")
    {
      console.log("Welcome Aayush");
    }
    if (this.email == "zenR740@gmail.com" && this.username == "RajivZen")
    {
      console.log("Welcome Rajiv");
      }
  }

  CallLoginContent() {
    LoginContent();
  }
}
