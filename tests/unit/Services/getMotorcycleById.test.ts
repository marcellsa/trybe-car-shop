import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

const idInput = '6348513f34c397abcad040b2';

describe('Deverá retornar apenas um carro', function () {
  it('Deve-se retornar apenas um carro com o id presente da URL', async function () {
    // Arrange
    const MotorcycleOutput: IMotorcycle = {
      id: '6348513f34c397abcad040b2',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    sinon.stub(Model, 'findById').resolves(MotorcycleOutput);

    // Act
    const service = new MotorcycleService();
    const result = await service.getMotorcycleById(idInput);

    // Assert
    expect(result).to.be.deep.equal(MotorcycleOutput);

    sinon.restore();
  });
});