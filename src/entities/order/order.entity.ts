import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { BaseEntity } from '@entities/common';
import { ProductEntity } from '@entities/product';
import { UserEntity } from '@entities/users';

@Entity('Order')
export class OrderEntity extends BaseEntity {
  @Column({ type: 'integer', name: 'count' })
  count: number;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.order)
  @JoinColumn()
  user: UserEntity;

  @ManyToOne(() => ProductEntity)
  @JoinColumn()
  product: ProductEntity;
}
