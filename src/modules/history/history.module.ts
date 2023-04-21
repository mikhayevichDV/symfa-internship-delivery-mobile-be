import { Module } from '@nestjs/common';

import { OrderModule } from '@modules/order';

import { HistoryController } from './controllers';
import { HistoryService } from './services';

@Module({
  imports: [OrderModule],
  controllers: [HistoryController],
  providers: [HistoryService],
})
export class HistoryModule {}
