import { Injectable } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from './dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';
@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'Brand 1',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
  ];

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
    return this.brands.find((brand) => brand.id === id);
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brand = this.brands.find((brand) => brand.id === id);
    const updatedBrand = { ...brand, ...updateBrandDto, updatedAt: Date.now() };
    this.brands = this.brands.map((brand) =>
      brand.id === id ? updatedBrand : brand,
    );

    return updatedBrand;
  }

  remove(id: string) {
    this.brands = this.brands.filter((brand) => brand.id !== id);
  }
}
