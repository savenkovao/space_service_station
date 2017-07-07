import { Component, OnInit } from '@angular/core';
// import { Ship } from './../../core/entities/ship';
import { ShipInfo } from './../../mock/ship';

@Component({
  selector: 'info-bar',
  templateUrl: './info-bar-component.component.html',
  styleUrls: ['./info-bar-component.component.css']
})



export class InfoBarComponentComponent implements OnInit {
  // public newShip: Ship;
  private shipInfoServ;
  public shipInfo;

  constructor() {
    this.shipInfoServ = new ShipInfo();
    this.shipInfo = this.shipInfoServ.getNewShip();

    // this.newShip = new Ship({
    //     id: 1,
    //     type: 'TOURIST',
    //     name: "Honour",
    //     pilot: "Peter Quill",
    //     details: [
    //       'SERVICEABLE',
    //       'SERVICEABLE',
    //       'BROKEN',
    //       'SERVICEABLE',
    //       'DAMAGED'
    //     ]
    //   }
    // );
  }

  ngOnInit() {
    console.log(this.shipInfo);
  }

}
