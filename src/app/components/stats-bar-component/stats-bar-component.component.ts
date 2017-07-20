import { Component, OnInit } from '@angular/core';
import { StopWatchModule } from '../../core/services/stopwatch/stopwatch';

@Component({
  selector: 'stats-bar',
  templateUrl: './stats-bar-component.component.html',
  styleUrls: ['./stats-bar-component.component.css'],
})




export class StatsBarComponentComponent implements OnInit {
  public repairedShips = 3;
  public repairedDetails = 7;

  constructor() {
    this.getTime();
  }


  getTime(){
  }


  ngOnInit() {
  }

}
