import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';

const carInput: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

describe('Deverá cadastrar um novo carro', function () {
  it('Deve-se retornar as informações do carro cadastrado com sucesso', async function () {
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

    sinon.stub(Model, 'create').resolves(carOutput);

    // Act
    const service = new CarService();
    const result = await service.createNewCar(carInput);

    // Assert
    expect(result).to.be.deep.equal(carOutput);

    sinon.restore();
  });
});