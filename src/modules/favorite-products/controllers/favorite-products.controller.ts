import { Body, Get, HttpStatus, Post, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { AwareIdDto } from '@models/dto';
import { ApiGetProductsModel, QueryGetProductsDto } from '@modules/products/models';
import { AuthenticatedUser, IsAuthenticated } from '@shared/user/decorators';

import { FavoriteProductsController as Controller } from '../decorators';
import { FavoriteProductsService } from '../services';

@Controller()
@ApiTags('Favorite products')
export class FavoriteProductsControllers {
  constructor(private readonly _favoriteProductsService: FavoriteProductsService) {}

  @IsAuthenticated()
  @Get('get')
  @ApiResponse({
    status: HttpStatus.OK,
    isArray: true,
  })
  async getFavoriteProducts(@AuthenticatedUser() req: any, @Query() dto: QueryGetProductsDto): Promise<any> {
    return this._favoriteProductsService.getFavoriteProducts(req, dto);
  }

  @IsAuthenticated()
  @Post('add')
  @ApiResponse({
    type: ApiGetProductsModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  async addFavoriteProduct(@AuthenticatedUser() req: any, @Body() product: AwareIdDto): Promise<void> {
    return this._favoriteProductsService.addFavoriteProduct(req, product.id);
  }
}
