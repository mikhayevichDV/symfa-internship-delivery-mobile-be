import { Module } from '@nestjs/common';

import { FavoriteProductsControllers } from './controllers';
import { FavoriteProductsService } from './services';

@Module({
  controllers: [FavoriteProductsControllers],
  providers: [FavoriteProductsService],
})
export class FavoriteProductsModule {}
