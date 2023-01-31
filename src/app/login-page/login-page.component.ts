import { Component } from '@angular/core';

declare var LoginContent: () => any;

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  CallLoginContent() {
    LoginContent();
  }
}
