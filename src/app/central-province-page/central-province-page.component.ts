import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

declare var CentralLoadContent: () => any;
declare var MukuwaButtonClick: () => any;
declare var EngButtonClick: () => any;
declare var MukuwaMouseOver: () => any;
declare var MukuwaMouseOut: () => any;
declare var EngMouseOver: () => any;
declare var EngMouseOut: () => any;

@Component({
  selector: 'app-central-province-page',
  templateUrl: './central-province-page.component.html',
  styleUrls: ['./central-province-page.component.css']
})
export class CentralProvincePageComponent{

  mukuList: any;
  engList: any;
  centralChartData: any;

  constructor(private apiService: ApiService) {
    this.getMukuwaList()
    this.getEngineerList()
  }

  getMukuwaList() {
    this.apiService.getCentralMukuwa().subscribe({
      complete: () => {

      },
      error: (error) => {
        console.log(error)
      },
      next:(value)=> {
        this.mukuList = value
      },
    })
  }

  getEngineerList() {
    this.apiService.getCentralEng().subscribe({
      complete: () => {

      },
      error: (error) => {
        console.log(error)
      },
      next:(value)=> {
        this.engList = value
      },
    })
  }



  CallCentralLoadContent() {
    CentralLoadContent();
  }

  CallMukuwaButtonClick() {
    MukuwaButtonClick();
  }

  CallEngButtonClick() {
    EngButtonClick();
  }

  CallMukuwaMouseOver() {
    MukuwaMouseOver();
  }

  CallMukuwaMouseOut() {
    MukuwaMouseOut();
  }

  CallEngMouseOver() {
    EngMouseOver();
  }

  CallEngMouseOut() {
    EngMouseOut();
  }
}
