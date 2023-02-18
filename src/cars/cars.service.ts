import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    { id: 1, brand: 'Ford', model: 'Fusion Hybrid' },
    { id: 2, brand: 'Chevy', model: 'Volt' },
    { id: 3, brand: 'Dodge', model: 'Charger' },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }
}
