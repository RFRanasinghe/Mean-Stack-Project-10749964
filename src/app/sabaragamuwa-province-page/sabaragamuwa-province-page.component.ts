import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

declare var SabaragamuwaContent: () => any;

@Component({
  selector: 'app-sabaragamuwa-province-page',
  templateUrl: './sabaragamuwa-province-page.component.html',
  styleUrls: ['./sabaragamuwa-province-page.component.css']
})
export class SabaragamuwaProvincePageComponent {

  kynaxList: any;
  grapList : any;

  constructor(private apiService: ApiService) {
    this.getKynaxList()
    this.getGraphiteList()
   }

  getKynaxList() {
    this.apiService.getSabKyrax().subscribe({
      complete: () => {

      },
      error: (error) => {
        console.log(error)
      },
      next:(value)=> {
        this.kynaxList = value
      },
    })
  }

  getGraphiteList() {
    this.apiService.getSabSaphite().subscribe({
      complete: () => {

      },
      error: (error) => {
        console.log(error)
      },
      next:(value)=> {
        this.grapList = value
      },
    })
  }

  CallSabaragamuwaContent() {
    SabaragamuwaContent();
  }
}
