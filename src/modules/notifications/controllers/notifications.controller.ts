import { Get, HttpStatus, Param, ParseUUIDPipe } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { NotificationsController as Controller } from '../decorators';
import { NotificationsServices } from '../services';

@Controller()
@ApiTags('Notifications')
export class NotificationsController {
  constructor(private readonly _notificationsServices: NotificationsServices) {}

  @Get('/get')
  @ApiResponse({
    status: HttpStatus.OK,
    isArray: true,
  })
  async getNotification(@Param('id', ParseUUIDPipe) userId: string) {
    return this._notificationsServices.getNotification(userId);
  }
}
