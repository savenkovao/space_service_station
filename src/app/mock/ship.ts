import { Ship } from './../core/entities/ship';

let newShip = null;

class SingleShip {

  constructor() {

    if(!newShip){
      newShip = new Ship({
        id: Math.round(Math.random() * (100 - 1) + 1),
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

    return newShip;
  }
}

export const ShipInfo = new SingleShip();
