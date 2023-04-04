import { Module } from '@nestjs/common';

import { ProductsControllers } from './controllers';
import { ProductsService } from './services';

@Module({
  controllers: [ProductsControllers],
  providers: [ProductsService],
})
export class ProductsModule {}
