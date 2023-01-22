import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

declare var NorthCentralContent: () => any;

@Component({
  selector: 'app-north-cental-pro-page',
  templateUrl: './north-cental-pro-page.component.html',
  styleUrls: ['./north-cental-pro-page.component.css']
})
export class NorthCentalProPageComponent {

  techList: any;

  constructor(private apiService: ApiService) {
    this.getTechList()
  }

  getTechList() {
    this.apiService.getNorthCentralProvince().subscribe({
      complete: () => {

      },
      error: (error) => {
        console.log(error)
      },
      next:(value)=> {
        this.techList = value
      },
    })
  }

  CallNorthCentralContent() {
    NorthCentralContent();
  }
}
