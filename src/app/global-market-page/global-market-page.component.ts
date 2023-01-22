import { Component } from '@angular/core';
import { ServerCapabilities } from 'mongodb';
import { map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

declare var globalMarketPageContent: () => any;
declare var SpaMouseOver: () => any;
declare var SpaMouseOut: () => any;
declare var LouisMouseOver: () => any;
declare var LouisMouseOut: () => any;
declare var HermerMouseOver: () => any;
declare var hermerButton: () => any;
declare var SpaButtonClick: () => any;
declare var LouisButtonClick: () => any;
declare var HermerButtonClick: () => any;

@Component({
  selector: 'app-global-market-page',
  templateUrl: './global-market-page.component.html',
  styleUrls: ['./global-market-page.component.css']
})
export class GlobalMarketPageComponent {

  spaList: any;
  louisList: any;
  hermerList: any;

  constructor(private apiService: ApiService) {
    this.getSpaList()
    this.getLouisList()
    this.getHermerList()
  }

  getSpaList() {
    this.apiService.getGlobalSpa().subscribe({
      complete: () => {

      },
      error: (error) => {
        console.log(error)
      },
      next:(value)=> {
        this.spaList = value
      },
    })
  }

  getLouisList() {
    this.apiService.getGlobalLouis().subscribe({
      complete: () => {

      },
      error: (error) => {
        console.log(error)
      },
      next:(value)=> {
        this.louisList = value
      },
    })
  }

  getHermerList() {
    this.apiService.getGlobalHermer().subscribe({
      complete: () => {

      },
      error: (error) => {
        console.log(error)
      },
      next:(value)=> {
        this.hermerList = value
      },
    })
  }

  CallglobalMarketPageContent() {
    globalMarketPageContent();
  }

  CallSpaMouseOver() {
    SpaMouseOver();
  }

  CallSpaMouseOut() {
    SpaMouseOut();
  }

  CallLouisMouseOver() {
    LouisMouseOver();
  }

  CallLouisMouseOut() {
    LouisMouseOut();
  }

  CallHermerMouseOver() {
    HermerMouseOver();
  }

  CallhermerButton() {
    hermerButton();
  }

  CallSpaButtonClick() {
    SpaButtonClick();
  }

  CallLouisButtonClick() {
    LouisButtonClick();
  }

  CallHermerButtonClick() {
    HermerButtonClick();
  }
}
