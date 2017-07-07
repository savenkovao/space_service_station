// interface IDetail {
//   cockpit: DetailState;
//   deck: DetailState;
//   leftTurbine: DetailState;
//   rightTurbine: DetailState;
//   engine: DetailState;
// }

enum DetailState {
  serviceable = 0,
  damaged = 1,
  broken = 2
}

enum ShipTypes {
  tourist = 0,
  merchant = 1,
  battle = 2
}

class Detail {
  public cockpit: DetailState;
  public deck: DetailState;
  public leftTurbine: DetailState;
  public rightTurbine: DetailState;
  public engine: DetailState;

  constructor(details: number []) {
    this.cockpit = details[0] || 0;
    this.deck = details[1] || 0;
    this.leftTurbine = details[2] || 0;
    this.rightTurbine = details[3] || 0;
    this.engine = details[4] || 0;
  }
}

export class Ship {
  public id: number;
  public type: ShipTypes;
  public name: string;
  public pilot: string;
  public details: Detail;

  constructor(ship:any) {
    this.id = ship.id || null;
    this.type = ship.type || null;
    this.name = ship.name || null;
    this.pilot = ship.pilot || null;
    // this.details = ship.details || null;
    this.details = new Detail(ship.details);
  }
}
