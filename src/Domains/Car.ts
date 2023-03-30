import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  // protected id: string | undefined;
  // protected model: string;
  // protected year: number;
  // protected color: string;
  // protected status: boolean;
  // protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    super(car);
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }
}

export default Car;
