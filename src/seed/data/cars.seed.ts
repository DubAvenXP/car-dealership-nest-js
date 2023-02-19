import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  { id: uuid(), brand: 'Ford', model: 'Fusion Hybrid' },
  { id: uuid(), brand: 'Chevy', model: 'Volt' },
  { id: uuid(), brand: 'Dodge', model: 'Charger' },
  { id: uuid(), brand: 'Tesla', model: 'Model 3' },
  { id: uuid(), brand: 'Tesla', model: 'Model S' },
  { id: uuid(), brand: 'Tesla', model: 'Model X' },
  { id: uuid(), brand: 'Tesla', model: 'Model Y' },
  { id: uuid(), brand: 'Tesla', model: 'Cybertruck' },
  { id: uuid(), brand: 'Tesla', model: 'Roadster' },
  { id: uuid(), brand: 'Tesla', model: 'Semi' },
  { id: uuid(), brand: 'Toyota', model: 'Prius' },
  { id: uuid(), brand: 'Toyota', model: 'Prius Prime' },
];
