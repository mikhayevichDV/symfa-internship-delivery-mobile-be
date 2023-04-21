import { Module } from '@nestjs/common';

import { OrderControllers } from './controllers';
import { OrderService } from './services';

@Module({
  exports: [OrderService],
  controllers: [OrderControllers],
  providers: [OrderService],
})
export class OrderModule {}
