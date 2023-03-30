import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcycleRoutes = Router();

motorcycleRoutes.post(
  '/motorcycles', 
  (req, res, next) => new MotorcycleController(req, res, next).createNewMotorcycle(),
);

motorcycleRoutes.get(
  '/motorcycles', 
  (req, res, next) => new MotorcycleController(req, res, next).getAllMotorcycles(),
);

motorcycleRoutes.get(
  '/motorcycles/:id', 
  (req, res, next) => new MotorcycleController(req, res, next).getMotorcycleById(),
);

export default motorcycleRoutes;