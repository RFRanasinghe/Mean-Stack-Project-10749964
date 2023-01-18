import { Component } from '@angular/core';

declare var NorthContentFunction: () => any;

@Component({
  selector: 'app-north-province-page',
  templateUrl: './north-province-page.component.html',
  styleUrls: ['./north-province-page.component.css']
})
export class NorthProvincePageComponent {

  CallNorthContentFunction() {
    NorthContentFunction();
  }
}
