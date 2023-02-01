import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

declare var ProfileContent: () => any;

@Component({
  selector: 'app-personal-profile-page',
  templateUrl: './personal-profile-page.component.html',
  styleUrls: ['./personal-profile-page.component.css']
})
export class PersonalProfilePageComponent {

  andriaList: any;

  constructor(private apiService: ApiService) {
    this.getAndriaProList()
  }

  getAndriaProList() {
    this.apiService.getRegisterProfile().subscribe({
      complete: () => {

      },
      error: (error) => {
        console.log(error)
      },
      next:(value)=> {
        this.andriaList = value
      },
    })
  }

  CallProfileContent() {
    ProfileContent();
  }
}
