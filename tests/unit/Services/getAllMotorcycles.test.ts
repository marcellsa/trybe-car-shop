import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

const MotorcyclesInput: IMotorcycle[] = [
  {
    id: '6348513f34c397abcad040b2',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '6348513f34c397abcad040b3',
    model: 'Suzuki Cb 800f Hornet',
    year: 2006,
    color: 'Blue',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 800,
  },
  {
    id: '6348513f34c397abcad040b4',
    model: 'Yamaha Cb 900f Hornet',
    year: 2007,
    color: 'Grey',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 900,
  },
];

describe('Deverá retornar a lista de todas as motocicletas', function () {
  it('Deve-se retornar a lista de todas as motocicletas registradas', async function () {
    // Arrange
    const MotorcyclesOutput: Motorcycle[] = MotorcyclesInput.map((item) => new Motorcycle(item));

    sinon.stub(Model, 'find').resolves(MotorcyclesOutput);

    // Act
    const service = new MotorcycleService();
    const result = await service.getAllMotorcycles();

    // Assert
    expect(result).to.be.deep.equal(MotorcyclesOutput);

    sinon.restore();
  });
});