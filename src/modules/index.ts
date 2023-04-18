import { AuthModule } from './auth';
import { FavoriteProductsModule } from './favorite-products';
import { OrderModule } from './order';
import { ProductsModule } from './products';
import { PromoCodesModule } from './promo-codes';
import { RegisterModule } from './register';

export const APP_MODULES = [
  RegisterModule,
  ProductsModule,
  AuthModule,
  OrderModule,
  PromoCodesModule,
  FavoriteProductsModule,
];
