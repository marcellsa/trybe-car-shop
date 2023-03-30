import Motorcycles from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import GenerateError from '../utils/GenerateError';

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

  public async getAllMotorcycles() {
    const motorcycleODM = new MotorcycleODM();
    const motorcycles = await motorcycleODM.findAll();
    const motorcyclesArray = motorcycles.map((moto) => this.createMotorcycleDomain(moto));
    return motorcyclesArray;  
  }

  public async getMotorcycleById(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const motorcycle = await motorcycleODM.findById(id);
    if (!motorcycle) throw new GenerateError(404, 'Motorcycle not found');    
    return this.createMotorcycleDomain(motorcycle);
  }
}

export default MotorcycleService;
