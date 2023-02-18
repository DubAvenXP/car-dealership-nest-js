import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  private cars = [
    { id: 1, make: 'Ford', model: 'Fusion Hybrid' },
    { id: 2, make: 'Chevy', model: 'Volt' },
    { id: 3, make: 'Dodge', model: 'Charger' },
  ];

  @Get()
  getAllCars() {
    return this.cars;
  }

  @Get(':id')
  getCarById(@Param('id') id: string) {
    return this.cars.find((car) => car.id === +id);
  }
}
