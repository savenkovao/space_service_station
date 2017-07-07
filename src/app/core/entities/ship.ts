interface IShip {
  id: number;
  type: string; //'battle-ship'|'merchant-ship'|'tourist ship'
  name: string; //from 'names' array
  pilot: string; //from 'pilots names' array
  details: IDetails;

}

interface IDetails {
  cockpit: IDetailState;
  deck: IDetailState;
  leftTurbine: IDetailState;
  rightTurbine: IDetailState;
  engine: IDetailState;
}

interface IDetailState {
  state: string; // 'serviceable', 'damaged', 'broken'
}

export class Ship implements IShip {
  public id: number;
  public type: string;
  public name: string;
  public pilot: string;
  public details: IDetails;

  constructor(ship:any){
    this.id = ship.id || null;
    this.type = ship.type || null;
    this.name = ship.name || null;
    this.pilot = ship.pilot || null;
    this.details = ship.details || null;
  }
}
