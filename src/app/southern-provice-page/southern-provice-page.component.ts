import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

declare var SouthernContent: () => any;
declare var MegaOnMouse: () => any;
declare var MegaOutMouse: () => any;
declare var MegaButtonClick: () => any;

@Component({
  selector: 'app-southern-provice-page',
  templateUrl: './southern-provice-page.component.html',
  styleUrls: ['./southern-provice-page.component.css']
})
export class SouthernProvicePageComponent {

  megaList: any;

  constructor(private apiService: ApiService) {
    this.getMegaSuthernList()
   }

  getMegaSuthernList() {
    this.apiService.getSouthernMegaSuthern().subscribe({
      complete: () => {

      },
      error: (error) => {
        console.log(error)
      },
      next:(value)=> {
        this.megaList = value
      },
    })
  }

  CallSouthernContent() {
    SouthernContent();
  }

  CallMegaOnMouse() {
    MegaOnMouse();
  }

  CallMegaOutMouse() {
    MegaOutMouse();
  }

  CallMegaButtonClick() {
    MegaButtonClick();
  }
}
