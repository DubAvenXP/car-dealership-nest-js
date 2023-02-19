import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from './dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [];

  create(createBrandDto: CreateBrandDto) {
    const brand = {
      id: uuid(),
      ...createBrandDto,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    this.brands.push(brand);

    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);

    if (!brand) throw new NotFoundException(`Brand with id ${id} not found`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brand = this.brands.find((brand) => brand.id === id);

    if (!brand) throw new NotFoundException(`Brand with id ${id} not found`);

    const updatedBrand = { ...brand, ...updateBrandDto, updatedAt: Date.now() };
    this.brands = this.brands.map((brand) =>
      brand.id === id ? updatedBrand : brand,
    );

    return updatedBrand;
  }

  remove(id: string) {
    const index = this.brands.findIndex((brand) => brand.id === id);
    if (index === -1)
      throw new NotFoundException(`Brand with id ${id} not found`);

    this.brands.splice(index, 1);
  }

  fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
