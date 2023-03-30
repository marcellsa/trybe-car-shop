import { isValidObjectId, Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import GenerateError from '../utils/GenerateError';
import AbstractODM from './AbstractODM';

class MotorcycleODM extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    const modelName = 'motorcycles';
    super(schema, modelName);
  }

  public async create(motorcycle: IMotorcycle): Promise<IMotorcycle> {
    return this.model.create({ ...motorcycle });
  }

  public async findAll(): Promise<IMotorcycle[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise<IMotorcycle | null> {
    if (!isValidObjectId(id)) throw new GenerateError(422, 'Invalid mongo id');
    return this.model.findById(id);
  }

  public async updateMotorcycle(id: string, motorcycle: IMotorcycle): Promise<IMotorcycle | null> {
    if (!isValidObjectId(id)) throw new GenerateError(422, 'Invalid mongo id');
    return this.model.findByIdAndUpdate(id, motorcycle, { new: true });
  }
}

export default MotorcycleODM;
