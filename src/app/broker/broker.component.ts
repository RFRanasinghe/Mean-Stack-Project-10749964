import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


declare var loadSocket: (type:string) => any;

@Component({
  selector: 'app-broker',
  templateUrl: './broker.component.html',
  styleUrls: ['./broker.component.css']
})
export class BrokerComponent implements OnInit {

  brokerType: string = "";
  constructor(private router: ActivatedRoute){}

  ngOnInit(): void {
    this.brokerType = this.router.snapshot.paramMap.get('type') ?? "";
    this.CallLoadSocket();
  }
  CallLoadSocket() {
    loadSocket(this.brokerType);
  }

}
