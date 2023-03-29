import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carRoutes = Router();

carRoutes.post('/cars', (req, res, next) => new CarController(req, res, next).createNewCar());

carRoutes.get('/cars', (req, res, next) => new CarController(req, res, next).getAllCars());

carRoutes.get('/cars/:id', (req, res, next) => new CarController(req, res, next).getCarById());

export default carRoutes;