import Motorcycles from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  public createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycles | null {
    if (motorcycle) {
      return new Motorcycles(motorcycle);
    }
    return null;
  }

  public async createNewMotorcycle(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMoto = await motorcycleODM.create(motorcycle);
    return this.createMotorcycleDomain(newMoto);
  }
}

export default MotorcycleService;
