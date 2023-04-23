import { FavoriteProductsEntity } from './favorite-products';
import { HistoryEntity } from './history';
import { OrderEntity } from './order';
import { ProductEntity } from './product';
import { PromoCodesEntity } from './promo-codes';
import { UserEntity } from './users';

export const ENTITIES = [
  ProductEntity,
  UserEntity,
  FavoriteProductsEntity,
  OrderEntity,
  HistoryEntity,
  PromoCodesEntity,
];

export const SUBSCRIBERS = [];
