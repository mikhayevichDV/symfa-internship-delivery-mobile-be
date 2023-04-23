import { Column, Entity, OneToMany } from 'typeorm';

import { BaseEntity } from '@entities/common';
import { FavoriteProductsEntity } from '@entities/favorite-products';
import { HistoryEntity } from '@entities/history';
import { OrderEntity } from '@entities/order';
import { UserRole } from '@models/enum';

@Entity('user')
export class UserEntity extends BaseEntity {
  @Column({ type: 'varchar', name: 'user_id', unique: true })
  userId: string;

  @Column({ type: 'varchar', name: 'name' })
  username: string;

  @Column({ type: 'varchar', name: 'email', unique: true })
  email: string;

  @Column({ type: 'varchar', name: 'password', select: false })
  password: string;

  @Column({ type: 'varchar', name: 'address', default: null })
  address: string | null;

  @Column({ type: 'enum', name: 'user_role', enum: UserRole, default: UserRole.Client })
  role: UserRole;

  @Column({ type: 'varchar', name: 'avatar', nullable: true })
  avatar: string;

  @OneToMany(() => OrderEntity, (order: OrderEntity) => order.user)
  order: OrderEntity[];

  @OneToMany(() => FavoriteProductsEntity, (favorites: FavoriteProductsEntity) => favorites.user)
  favorites: FavoriteProductsEntity[];

  @OneToMany(() => HistoryEntity, (history: HistoryEntity) => history.user)
  history: HistoryEntity;
}
