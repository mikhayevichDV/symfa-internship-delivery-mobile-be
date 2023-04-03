import { Column, Entity } from 'typeorm';

import { BaseEntity } from '../common';

@Entity('avatar')
export class UserAvatarEntity extends BaseEntity {
  @Column({ type: 'varchar', name: 'Avatar path', unique: true })
  avatarPath: string;
}
