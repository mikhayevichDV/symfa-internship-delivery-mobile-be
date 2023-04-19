import { Module } from '@nestjs/common';

import { HistoryController } from './controllers';
import { HistoryService } from './services';

@Module({
  controllers: [HistoryController],
  providers: [HistoryService],
})
export class HistoryModule {}
