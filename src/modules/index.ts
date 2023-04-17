import { AuthModule } from './auth';
import { FavoriteProductsModule } from './favorite-products';
import { ProductsModule } from './products';
import { PromoCodesModule } from './promo-codes';
import { RegisterModule } from './register';

export const APP_MODULES = [RegisterModule, ProductsModule, AuthModule, PromoCodesModule, FavoriteProductsModule];
