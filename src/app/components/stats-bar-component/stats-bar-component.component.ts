import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stats-bar',
  templateUrl: './stats-bar-component.component.html',
  styleUrls: ['./stats-bar-component.component.css'],
})

export class StatsBarComponentComponent implements OnInit {
  public repairedShips = 3;
  public repairedDetails = 7;
  private date = new Date();
  private startDate = new Date();
  public time: string;

  constructor() {
    this.getTime();
  }


  getTime(){
    setInterval( () => {
      this.date = new Date();
      this.time = this.date.getMinutes() + ' : '+ this.date.getSeconds() + ' : '+ (this.date.getMilliseconds()/10).toFixed(0);
    }, 10);
  }


  ngOnInit() {
  }

}
