import { DeepPartial } from 'typeorm';

import { ProductEntity } from '@entities/product';
import { UserEntity } from '@entities/users';
import { AbstractLoader, IRelationsOptions } from '@fixtures/abstract-loader';
import { USERS_FIXTURES } from '@fixtures/dev/data/users';
import { EnvironmentType } from '@models/enum';

export class UsersLoader extends AbstractLoader<UserEntity> {
  entity: new () => UserEntity = UserEntity;

  data: DeepPartial<UserEntity>[] = USERS_FIXTURES;

  environments: EnvironmentType[] = [EnvironmentType.Development];

  relations: Array<IRelationsOptions<ProductEntity, UserEntity>> = [
    {
      relativeEntity: ProductEntity,
      relationKey: 'favoriteProducts',
    },
  ];
}
