import { Injectable } from '@nestjs/common';
import { BRAND_SEED, CARS_SEED } from './data';

import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}

  populateDB() {
    this.brandsService.fillBrandsWithSeedData(BRAND_SEED);
    this.carsService.fillCarsWithSeedData(CARS_SEED);

    return 'Successfully populated the seed data';
  }
}
