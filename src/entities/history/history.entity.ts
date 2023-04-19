import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne } from 'typeorm';

import { BaseEntity } from '@entities/common';
import { UserEntity } from '@entities/users';
import { OrderStatus } from '@models/enum';

@Entity('History')
export class HistoryEntity extends BaseEntity {
  @Column({ type: 'float', name: 'total' })
  total: number;

  @Column({ type: 'varchar', name: 'OrderID' })
  orderId: string;

  @Column({ type: 'varchar', name: 'address' })
  address: string;

  @Column({ type: 'enum', name: 'status', enum: OrderStatus })
  status: OrderStatus;

  @OneToOne(() => UserEntity, (user: UserEntity) => user.history)
  @JoinColumn()
  user: UserEntity;

  @ManyToMany(() => UserEntity)
  @JoinTable()
  courier: UserEntity[];
}
