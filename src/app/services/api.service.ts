import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private url = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) { }

  getLocalBroker() {
    return this.httpClient.get(this.url+'/localBroker').pipe(map(data=>data))
  }


  register(data: any) {
    return this.httpClient.post(this.url+'/register',data).pipe(map(data=>data))
  }


}
