import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

declare var NorthContentFunction: () => any;

@Component({
  selector: 'app-north-province-page',
  templateUrl: './north-province-page.component.html',
  styleUrls: ['./north-province-page.component.css']
})
export class NorthProvincePageComponent {

  sList: any;
  jList: any;

  constructor(private apiService: ApiService) {
    this.getSogoList()
    this.getJewelList()
  }

  getSogoList() {
    this.apiService.getNorthSogo().subscribe({
      complete: () => {

      },
      error: (error) => {
        console.log(error)
      },
      next:(value)=> {
        this.sList = value
      },
    })
  }

  getJewelList() {
    this.apiService.getNorthJewel().subscribe({
      complete: () => {

      },
      error: (error) => {
        console.log(error)
      },
      next:(value)=> {
        this.jList = value
      },
    })
  }

  CallNorthContentFunction() {
    NorthContentFunction();
  }
}
