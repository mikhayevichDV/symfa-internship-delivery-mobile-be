import { Module } from '@nestjs/common';

import { ProductsControllers } from '@modules/products/controllers/products.controllers';
import { ProductsService } from '@modules/products/services/products.service';

@Module({
  controllers: [ProductsControllers],
  providers: [ProductsService],
})
export class ProductsModule {}
