import { Component, OnInit } from '@angular/core';
import { ShipInfo } from './../../mock/ship';

@Component({
  selector: 'crash-bar',
  templateUrl: './crash-bar-component.component.html',
  styleUrls: ['./crash-bar-component.component.css']
})
export class CrashBarComponentComponent implements OnInit {
  public shipInfo;
  private damaged = "DAMAGED";
  private broken = "BROKEN";

  constructor() {
    this.shipInfo = ShipInfo;
  }

  getDamagedBoolean(str) {
    if (str == this.damaged) {
      return true;
    }
  }
  getBrokenBoolean(str) {
    if (str == this.broken) {
      return true;
    }
  }


  ngOnInit() {
  }

}
