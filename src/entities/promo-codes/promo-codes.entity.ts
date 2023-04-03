import { Column, Entity } from 'typeorm';

import { BaseEntity } from '@entities/common';

@Entity('promo-codes')
export class PromoCodesEntity extends BaseEntity {
  @Column({ type: 'varchar', name: 'code' })
  code: string;

  @Column({ type: 'float', name: 'discount' })
  discount: number;
}
