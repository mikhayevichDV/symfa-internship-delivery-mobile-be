import { Body, Get, HttpStatus, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { AwareIdDto } from '@models/dto';
import { ApiGetProductsModel } from '@modules/products/models';

import { FavoriteProductsController as Controller } from '../decorators';
import { FavoriteProductsService } from '../services';

@Controller()
@ApiTags('Favorite products')
export class FavoriteProductsControllers {
  constructor(private readonly _favoriteProductsService: FavoriteProductsService) {}

  @Get('favoriteProducts/:id')
  @ApiResponse({
    type: ApiGetProductsModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  async getFavoriteProducts(@Param('id', ParseUUIDPipe) id: string): Promise<any> {
    return this._favoriteProductsService.getFavoriteProducts(id);
  }

  @Post('addFavoriteProduct/:id')
  @ApiResponse({
    type: ApiGetProductsModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  async addFavoriteProduct(@Param('id', ParseUUIDPipe) userId: string, @Body() product: AwareIdDto): Promise<any> {
    return this._favoriteProductsService.addFavoriteProduct(userId, product.id);
  }
}