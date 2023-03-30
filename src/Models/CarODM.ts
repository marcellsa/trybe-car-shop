import { isValidObjectId, Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import GenerateError from '../utils/GenerateError';
import AbstractODM from './AbstractODM';

class CarODM extends AbstractODM<ICar> {
  // private schema: Schema;
  // private model: Model<ICar>;

  constructor() {
    // this.schema = new Schema<ICar>({
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    // this.model = models.Car || model('Car', this.schema);
    const modelName = 'cars';
    super(schema, modelName);
  }

  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async findAll(): Promise<ICar[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise<ICar | null> {
    if (!isValidObjectId(id)) throw new GenerateError(422, 'Invalid mongo id');
    return this.model.findById(id);
  }

  public async updateCar(id: string, carToUpdate: ICar): Promise<ICar | null> {
    if (!isValidObjectId(id)) throw new GenerateError(422, 'Invalid mongo id');
    return this.model.findByIdAndUpdate(id, carToUpdate, { new: true });
  }
}

export default CarODM;
