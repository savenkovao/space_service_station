import { Component, OnInit } from '@angular/core';
// import { Ship } from './../../core/entities/ship';
import { ShipInfo } from './../../mock/ship';

@Component({
  selector: 'info-bar',
  templateUrl: './info-bar-component.component.html',
  styleUrls: ['./info-bar-component.component.css']
})



export class InfoBarComponentComponent implements OnInit {
  public shipInfo;

  constructor() {
    this.shipInfo = ShipInfo;
  }

  ngOnInit() {
  }

}
