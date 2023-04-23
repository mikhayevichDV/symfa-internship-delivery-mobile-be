import { Module } from '@nestjs/common';

import { NotificationsController } from './controllers';
import { NotificationsServices } from './services';

@Module({
  controllers: [NotificationsController],
  providers: [NotificationsServices],
})
export class NotificationsModule {}
