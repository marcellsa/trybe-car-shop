import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import GenerateError from '../utils/GenerateError';

class MotorcycleService {
  public createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
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

  public async updateMotorcycle(id: string, motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const updatedMotorcycle = await motorcycleODM.updateMotorcycle(id, motorcycle);
    if (!updatedMotorcycle) throw new GenerateError(404, 'Motorcycle not found');  
    return this.createMotorcycleDomain(updatedMotorcycle);
  }
}

export default MotorcycleService;
