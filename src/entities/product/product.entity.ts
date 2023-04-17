import { Column, Entity, JoinColumn, ManyToMany, OneToOne } from 'typeorm';

import { BaseEntity } from '@entities/common';
import { ProductPhotoEntity } from '@entities/product-photo';
import { UserEntity } from '@entities/users';

@Entity('product')
export class ProductEntity extends BaseEntity {
  @Column({ type: 'varchar', name: 'title', unique: true })
  title: string;

  @Column({ type: 'varchar', name: 'type' })
  type: string;

  @Column({ type: 'varchar', name: 'flavor_type' })
  flavourType: string;

  @Column({ type: 'varchar', name: 'description' })
  description: string;

  @Column({ type: 'float', name: 'rating' })
  rating: number;

  @Column({ type: 'float', name: 'delivery_time' })
  deliveryTime: number;

  @Column({ type: 'float', name: 'price' })
  price: number;

  @OneToOne(() => ProductPhotoEntity)
  @JoinColumn()
  photo: ProductPhotoEntity;

  @ManyToMany(() => UserEntity, (users: UserEntity) => users.favoriteProducts)
  users: UserEntity[];
}
