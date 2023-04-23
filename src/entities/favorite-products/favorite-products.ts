import { Entity, JoinColumn, ManyToOne } from 'typeorm';

import { BaseEntity } from '@entities/common';
import { ProductEntity } from '@entities/product';
import { UserEntity } from '@entities/users';

@Entity('Favorite_products')
export class FavoriteProductsEntity extends BaseEntity {
  @ManyToOne(() => UserEntity, (user: UserEntity) => user.favorites)
  @JoinColumn()
  user: UserEntity;

  @ManyToOne(() => ProductEntity)
  @JoinColumn()
  product: ProductEntity;
}
