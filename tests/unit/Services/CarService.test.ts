import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarService from '../../../src/Services/CarService';

describe('Testar o endpoint /cars', function () {
  it('Deve-se retornar a lista de todos os carros', async function () {
    // Arrange
    const carList = [
      [
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
      ],
    ];

    sinon.stub(Model, 'find').resolves(carList);

    // Act
    const service = new CarService();
    const result = await service.getAllCars();

    // Assert
    expect(result).to.be.deep.equal(carList);

    sinon.restore();
  });
});