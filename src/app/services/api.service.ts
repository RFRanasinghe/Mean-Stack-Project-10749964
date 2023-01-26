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

  //central province api
  getCentralMukuwa() {
    return this.httpClient.get(this.url+'/localMarket/CentralProvince/mukuwa').pipe(map(data=>data));
  }

  getCentralEng() {
    return this.httpClient.get(this.url+'/localMarket/CentralProvince/engineer').pipe(map(data=>data));
  }

  //charts for central province companies api
  getCentralChartInfo() {
    return this.httpClient.get("http://localhost:8080/api/localMarket/CentralProvince/mukuwa");
  }

  //north central province api
  getNorthCentralProvince() {
    return this.httpClient.get(this.url+'/localMarket/NorthCentralProvince/techScroll').pipe(map(data=>data));
  }

  //north central province api
  getNorthCentralUlankulama() {
    return this.httpClient.get(this.url+'/localMarket/NorthCentralProvince/ulankulama').pipe(map(data=>data));
  }

  //eastern province api
  getEasternOmega() {
    return this.httpClient.get(this.url+'/localMarket/EasternProvince/omega').pipe(map(data=>data));
  }

  getEasternKWorld() {
    return this.httpClient.get(this.url+'/localMarket/EasternProvince/kworld').pipe(map(data=>data));
  }

  //western province api
  getWesternOdel() {
    return this.httpClient.get(this.url+'/localMarket/WesternProvince/Odel').pipe(map(data=>data))
  }

  getWesternAliya() {
    return this.httpClient.get(this.url+'/localMarket/WesternProvince/Aliya').pipe(map(data=>data))
  }

  getWesternMimosa() {
    return this.httpClient.get(this.url + '/localMarket/WesternProvince/Mimosa').pipe(map(data => data))
  }

  //north province api
  getNorthSogo() {
    return this.httpClient.get(this.url + '/localMarket/NorthProvince/Sogo').pipe(map(data => data))
  }

  getNorthJewel() {
    return this.httpClient.get(this.url + '/localMarket/NorthProvince/HappyJewellery').pipe(map(data => data))
  }

  //global api
  getGlobalSpa() {
    return this.httpClient.get(this.url + '/globalMarket/spaCeylon').pipe(map(data => data))
  }

  getGlobalLouis() {
    return this.httpClient.get(this.url + '/globalMarket/Louis').pipe(map(data => data))
  }

  getGlobalHermer() {
    return this.httpClient.get(this.url + '/globalMarket/Herm').pipe(map(data => data))
  }

  register(data: any) {
    return this.httpClient.post(this.url+'/register',data).pipe(map(data=>data))
  }


}
