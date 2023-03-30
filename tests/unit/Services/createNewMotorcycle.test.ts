import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

const motorcycleInput: IMotorcycle = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

describe('Deverá cadastrar uma nova motocicleta', function () {
  it('Deve-se retornar as informações da motocicleta cadastrada com sucesso', async function () {
    // Arrange
    const motorcycleOutput: IMotorcycle = {
      id: '6348513f34c397abcad040b2',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    sinon.stub(Model, 'create').resolves(motorcycleOutput);

    // Act
    const service = new MotorcycleService();
    const result = await service.createNewMotorcycle(motorcycleInput);

    // Assert
    expect(result).to.be.deep.equal(motorcycleOutput);

    sinon.restore();
  });
});