import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import GenerateError from '../utils/GenerateError';

class CarService {
  public createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async createNewCar(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async getAllCars() {
    const carODM = new CarODM();
    const cars = await carODM.findAll();
    const carsArray = cars.map((car) => this.createCarDomain(car));
    return carsArray;  
  }

  public async getCarById(id: string) {
    const carODM = new CarODM();
    const car = await carODM.findById(id);
    if (!car) throw new GenerateError(404, 'Car not found');    
    return this.createCarDomain(car);
  }
}

export default CarService;
