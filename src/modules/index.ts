import { AuthModule } from '@modules/auth/auth.module';
import { ProductsModule } from '@modules/products/products.module';
import { RegisterModule } from '@modules/register/register.module';

export const APP_MODULES = [RegisterModule, ProductsModule, AuthModule];
