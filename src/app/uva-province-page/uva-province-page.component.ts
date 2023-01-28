import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-uva-province-page',
  templateUrl: './uva-province-page.component.html',
  styleUrls: ['./uva-province-page.component.css']
})
export class UvaProvincePageComponent {

  halpeList: any;
  teamList: any;

  constructor(private apiService: ApiService) {
    this.getHalpeTeaList()
    this.getBetterTeamList()
   }

  getHalpeTeaList() {
    this.apiService.getUvaHalpeTea().subscribe({
      complete: () => {

      },
      error: (error) => {
        console.log(error)
      },
      next:(value)=> {
        this.halpeList = value
      },
    })
  }

  getBetterTeamList() {
    this.apiService.getUvaBetterTeam().subscribe({
      complete: () => {

      },
      error: (error) => {
        console.log(error)
      },
      next:(value)=> {
        this.teamList = value
      },
    })
  }
}
