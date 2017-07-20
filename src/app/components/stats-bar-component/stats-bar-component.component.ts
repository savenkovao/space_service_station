import { Component, OnInit } from '@angular/core';
import { StopWatchComponent } from '../../core/services/stopwatch/stopwatch';
import { StopWatchService } from '../../core/services/stopwatch/stopwatch.service';
@Component({
  selector: 'stats-bar',
  templateUrl: './stats-bar-component.component.html',
  styleUrls: ['./stats-bar-component.component.css'],
  providers: [StopWatchService]
})




export class StatsBarComponentComponent implements OnInit {
  public repairedShips = 3;
  public repairedDetails = 7;
  private appStart = false;
  public stopWatch = StopWatchService;
  constructor() {}

  startApp() {
    this.appStart = true;
    // this.stopWatch.start();
  }


  ngOnInit() {
  }

}
