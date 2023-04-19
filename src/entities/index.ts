import { HistoryEntity } from './history';
import { OrderEntity } from './order';
import { ProductEntity } from './product';
import { ProductPhotoEntity } from './product-photo';
import { PromoCodesEntity } from './promo-codes';
import { UserAvatarEntity } from './user-avatar';
import { UserEntity } from './users';

export const ENTITIES = [
  ProductEntity,
  UserEntity,
  ProductPhotoEntity,
  UserAvatarEntity,
  OrderEntity,
  HistoryEntity,
  PromoCodesEntity,
];

export const SUBSCRIBERS = [];
