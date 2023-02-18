import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dto';
@Controller('cars')
// @UsePipes(ValidationPipe)
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  findAll() {
    return this.carsService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id', new ParseUUIDPipe({ version: '5' })) id: string) {
    return this.carsService.findOneById(id);
  }

  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() body: any) {
    return { id, ...body };
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return { id };
  }
}
