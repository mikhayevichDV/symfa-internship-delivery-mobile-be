import { UserAvatarEntity } from '@entities/user-avatar';
import { AbstractLoader, IRelationsOptions } from '@fixtures/abstract-loader';
import { USER_AVATAR_FIXTURES } from '@fixtures/dev/data/user-avatar';
import { EnvironmentType } from '@models/enum';

export class UserAvatarLoader extends AbstractLoader<UserAvatarEntity> {
  entity: new () => UserAvatarEntity = UserAvatarEntity;

  data: Partial<UserAvatarEntity>[] = USER_AVATAR_FIXTURES;

  environments: EnvironmentType[] = [EnvironmentType.Development];

  relations: IRelationsOptions[] = [];
}
