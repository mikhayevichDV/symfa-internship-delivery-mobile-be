import { Body, Get, HttpStatus, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { AuthenticatedUser, IsAuthenticated } from '@shared/user/decorators';

import { HistoryController as Controller } from '../decorators';
import { CreateHistoryDto } from '../models';
import { HistoryService } from '../services';

@Controller()
@ApiTags('History')
export class HistoryController {
  constructor(private readonly _historyService: HistoryService) {}

  @IsAuthenticated()
  @Post('create')
  @ApiResponse({
    status: HttpStatus.OK,
  })
  async createHistory(@AuthenticatedUser() req: any, @Body() data: CreateHistoryDto) {
    return this._historyService.create(req, { ...data });
  }

  @IsAuthenticated()
  @Get('get')
  @ApiResponse({
    status: HttpStatus.OK,
    isArray: true,
  })
  async getHistory(@AuthenticatedUser() req: any): Promise<any> {
    return this._historyService.getHistory(req);
  }
}
