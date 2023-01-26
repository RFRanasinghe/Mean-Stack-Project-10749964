import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

declare var EasternContentLoad: () => any;

@Component({
  selector: 'app-eastern-province-page',
  templateUrl: './eastern-province-page.component.html',
  styleUrls: ['./eastern-province-page.component.css']
})
export class EasternProvincePageComponent {

  omegaList: any;
  kworldList: any;

  constructor(private apiService: ApiService) {
    this.getOmegaList()
    this.getKWorldList()
   }

  getOmegaList() {
    this.apiService.getEasternOmega().subscribe({
      complete: () => {

      },
      error: (error) => {
        console.log(error)
      },
      next:(value)=> {
        this.omegaList = value
      },
    })
  }

  getKWorldList() {
    this.apiService. getEasternKWorld().subscribe({
      complete: () => {

      },
      error: (error) => {
        console.log(error)
      },
      next:(value)=> {
        this.kworldList = value
      },
    })
  }

  CallEasternContentLoad() {
    EasternContentLoad();
  }
}
