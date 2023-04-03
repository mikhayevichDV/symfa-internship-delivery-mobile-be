import { PromoCodesEntity } from '@entities/promo-codes';

import { ProductEntity } from './product';
import { ProductPhotoEntity } from './product-photo';
import { UserAvatarEntity } from './user-avatar';
import { UserEntity } from './users';

export const ENTITIES = [ProductEntity, UserEntity, ProductPhotoEntity, UserAvatarEntity, PromoCodesEntity];

export const SUBSCRIBERS = [];
