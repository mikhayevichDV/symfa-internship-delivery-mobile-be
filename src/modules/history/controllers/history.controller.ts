import { Body, Get, HttpStatus, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { HistoryController as Controller } from '../decorators';
import { CreateHistoryDto } from '../models';
import { HistoryService } from '../services';

@Controller()
@ApiTags('History')
export class HistoryController {
  constructor(private readonly _historyService: HistoryService) {}

  @Post('create/:id')
  @ApiResponse({
    status: HttpStatus.OK,
  })
  async createHistory(@Param('id', ParseUUIDPipe) id: string, @Body() data: CreateHistoryDto) {
    return this._historyService.create(id, { ...data });
  }

  @Get('get/:id')
  @ApiResponse({
    status: HttpStatus.OK,
    isArray: true,
  })
  async getFavoriteProducts(@Param('id', ParseUUIDPipe) id: string): Promise<any> {
    return this._historyService.getHistory(id);
  }
}
