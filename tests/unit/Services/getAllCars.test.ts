import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';

const carsInput: ICar[] = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    buyValue: 39,
    doorsQty: 2,
    seatsQty: 5,
  },
];

describe('Deverá retornar a lista de todos os carros', function () {
  it('Deve-se retornar a lista de todos os carros com sucesso', async function () {
    // Arrange
    const carsOutput: Car[] = carsInput.map((item) => new Car(item));

    sinon.stub(Model, 'find').resolves(carsOutput);

    // Act
    const service = new CarService();
    const result = await service.getAllCars();

    // Assert
    expect(result).to.be.deep.equal(carsOutput);

    sinon.restore();
  });
});