import { Component } from '@angular/core';
import { ServerCapabilities } from 'mongodb';
import { map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

declare var globalMarketPageContent: () => any;

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
}
