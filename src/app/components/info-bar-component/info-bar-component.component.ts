import { Component, OnInit } from '@angular/core';
import { Ship } from './../../core/entities/ship';

@Component({
  selector: 'info-bar',
  templateUrl: './info-bar-component.component.html',
  styleUrls: ['./info-bar-component.component.css']
})



export class InfoBarComponentComponent implements OnInit {
  public newShip: Ship;

  constructor() {
    this.newShip = new Ship({
        id: 1,
        type: 'tourist',
        name: "Honour",
        pilot: "Peter Quill",
        details: [
          'serviceable',
          'serviceable',
          'broken',
          'serviceable',
          'damaged'
        ]
      }
    );
  }

  ngOnInit() {
    console.log( this.newShip );
    console.log( this.newShip.details );
  }

}
