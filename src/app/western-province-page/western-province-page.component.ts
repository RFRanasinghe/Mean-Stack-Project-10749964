import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

declare var WesternProContentFunction: () => any;

@Component({
  selector: 'app-western-province-page',
  templateUrl: './western-province-page.component.html',
  styleUrls: ['./western-province-page.component.css']
})
export class WesternProvincePageComponent {

  oList: any;
  aList: any;

  constructor(private apiService: ApiService) {
    this.getOdelList()
    this.getAliyaList()
  }

  getOdelList() {              //odel list
    this.apiService.getWesternOdel().subscribe({
      complete: () => {

      },
      error: (error) => {
        console.log(error)
      },
      next:(value)=> {
        this.oList = value
      },
    })
  }

  getAliyaList() {        //aliya list
    this.apiService.getWesternAliya().subscribe({
      complete: () => {

      },
      error: (error) => {
        console.log(error)
      },
      next:(value)=> {
        this.aList = value
      },
    })
  }
  //load page content function
  CallWesternProContentFunction() {
    WesternProContentFunction();
  }
}
