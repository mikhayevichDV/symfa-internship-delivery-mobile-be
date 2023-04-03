import { Column, Entity } from 'typeorm';

import { BaseEntity } from '@entities/common';

@Entity('product-photo')
export class ProductPhotoEntity extends BaseEntity {
  @Column({ type: 'varchar', name: 'Photo path', unique: true })
  photoPath: string;
}
