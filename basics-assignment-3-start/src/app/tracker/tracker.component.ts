import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {
  isMessageHidden = false;
  logs = [];

  constructor() {
  }

  ngOnInit() {
  }

  onClickDisplayDetails() {
    this.logs.push(new Date());
    this.isMessageHidden = !this.isMessageHidden;
  }
}
