import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

declare var CentralLoadContent: () => any;

@Component({
  selector: 'app-central-province-page',
  templateUrl: './central-province-page.component.html',
  styleUrls: ['./central-province-page.component.css']
})
export class CentralProvincePageComponent {

  mukuList: any;
  engList: any;

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
}
