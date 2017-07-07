import { Component, OnInit } from '@angular/core';
import { ShipInfo } from './../../mock/ship';

@Component({
  selector: 'crash-bar',
  templateUrl: './crash-bar-component.component.html',
  styleUrls: ['./crash-bar-component.component.css']
})
export class CrashBarComponentComponent implements OnInit {
  private shipInfoServ;
  public shipInfo;

  constructor() {
    this.shipInfoServ = new ShipInfo();
    this.shipInfo = this.shipInfoServ.getNewShip();
  }

  ngOnInit() {
  }

}
