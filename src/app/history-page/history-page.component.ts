import { Component } from '@angular/core';

declare var HistoryContent: () => any;

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent {


  CallHistoryContent() {
    HistoryContent();
  }
}
