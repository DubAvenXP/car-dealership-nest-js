import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRAND_SEED: Brand[] = [
  { id: uuid(), name: 'Ford', createdAt: Date.now(), updatedAt: Date.now() },
  { id: uuid(), name: 'Chevy', createdAt: Date.now(), updatedAt: Date.now() },
  { id: uuid(), name: 'Dodge', createdAt: Date.now(), updatedAt: Date.now() },
  { id: uuid(), name: 'Tesla', createdAt: Date.now(), updatedAt: Date.now() },
  { id: uuid(), name: 'Toyota', createdAt: Date.now(), updatedAt: Date.now() },
];
