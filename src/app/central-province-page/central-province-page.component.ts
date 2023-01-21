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

  constructor(private apiService: ApiService) {
    this.getMukuwaList()
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

  CallCentralLoadContent() {
    CentralLoadContent();
  }
}
