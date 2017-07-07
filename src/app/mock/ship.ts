import { Ship } from './../core/entities/ship';

export class ShipInfo {
  public newShip: Ship;

  constructor() {
    this.newShip = new Ship({
        id: 1,
        type: 'TOURIST',
        name: "Honour",
        pilot: "Peter Quill",
        details: [
          'SERVICEABLE',
          'SERVICEABLE',
          'BROKEN',
          'SERVICEABLE',
          'DAMAGED'
        ]
      });
  }

  getNewShip(){
    return this.newShip;
  }
}
