import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dtos/create-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: uuid(), brand: 'Ford', model: 'Fusion Hybrid' },
    { id: uuid(), brand: 'Chevy', model: 'Volt' },
    { id: uuid(), brand: 'Dodge', model: 'Charger' },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }

  create(createCarDto: CreateCarDto) {
    const car: Car = { id: uuid(), ...createCarDto };
    this.cars.push(car);

    return car;
  }
}
