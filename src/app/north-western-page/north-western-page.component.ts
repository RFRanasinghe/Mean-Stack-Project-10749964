import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

declare var CycloOnMouse: () => any;
declare var CycloOutMouse: () => any;
declare var JiffyOnMouse: () => any;
declare var JiffyOutMouse: () => any;
declare var CycloButtonClick: () => any;
declare var JiffyButtonClick: () => any;

@Component({
  selector: 'app-north-western-page',
  templateUrl: './north-western-page.component.html',
  styleUrls: ['./north-western-page.component.css']
})
export class NorthWesternPageComponent {

  cycloList: any;
  jiffyList: any;

  constructor(private apiService: ApiService) {
    this.getCyclomaxList()
    this.getJiffyList()
  }

  getCyclomaxList() {
    this.apiService.getNorthWesternCyclomax().subscribe({
      complete: () => {

      },
      error: (error) => {
        console.log(error)
      },
      next:(value)=> {
        this.cycloList = value
      },
    })
  }

  getJiffyList() {
    this.apiService.getNorthWesJiffy().subscribe({
      complete: () => {

      },
      error: (error) => {
        console.log(error)
      },
      next:(value)=> {
        this.jiffyList = value
      },
    })
  }

  CallCycloOnMouse() {
    CycloOnMouse();
  }

  CallCycloOutMouse() {
    CycloOutMouse();
  }

  CallJiffyOnMouse() {
    JiffyOnMouse();
  }

  CallJiffyOutMouse() {
    JiffyOutMouse();
  }

  CallCycloButtonClick() {
    CycloButtonClick();
  }

  CallJiffyButtonClick() {
    JiffyButtonClick();
  }
}
