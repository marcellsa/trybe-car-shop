import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';

const idInput = '634852326b35b59438fbea2f';

describe('Deverá retornar apenas um carro', function () {
  it('Deve-se retornar apenas um carro com o id presente da URL', async function () {
    // Arrange
    const carOutput: ICar = {
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    sinon.stub(Model, 'findById').resolves(carOutput);

    // Act
    const service = new CarService();
    const result = await service.getCarById(idInput);

    // Assert
    expect(result).to.be.deep.equal(carOutput);

    sinon.restore();
  });
});