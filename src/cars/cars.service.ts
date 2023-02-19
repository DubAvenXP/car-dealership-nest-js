import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dtos';

@Injectable()
export class CarsService {
  private cars: Car[] = [];

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

  update(id: string, updateCarDto: UpdateCarDto) {
    const car = this.findOneById(id);

    if (!car) throw new NotFoundException(`Car with id ${id} not found`);

    const index = this.cars.findIndex((car) => car.id === id);
    this.cars[index] = { ...car, ...updateCarDto };

    return this.cars[index];
  }

  delete(id: string) {
    const index = this.cars.findIndex((car) => car.id === id);
    if (index === -1)
      throw new NotFoundException(`Car with id ${id} not found`);

    this.cars.splice(index, 1);
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
