import { Get, HttpStatus, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { PromoCodesController as Controller } from '../decorators';
import { ApiGetPromocodesModel } from '../models';
import { PromoCodesServices } from '../services';

@Controller()
@ApiTags('Promo-codes')
export class PromoCodesControllers {
  constructor(private readonly _promocodesService: PromoCodesServices) {}

  @Get('all')
  @ApiResponse({
    type: ApiGetPromocodesModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  async getAllPromocodes() {
    return this._promocodesService.getAllPromocodes();
  }

  @Get('code/:code')
  @ApiResponse({
    type: ApiGetPromocodesModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  async getPromocode(@Param('code') code: string) {
    return this._promocodesService.getPromocode(code);
  }
}
