import { Body, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { ProductEntity } from '@entities/product';
import { AwareIdDto } from '@models/dto';
import { ApiGetProductsModel } from '@modules/products/models';
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
    type: ApiGetProductsModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  async getFavoriteProducts(@AuthenticatedUser() req: any): Promise<ProductEntity[]> {
    return this._favoriteProductsService.getFavoriteProducts(req);
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

  @IsAuthenticated()
  @Get('get/title/:title')
  @ApiResponse({
    type: ApiGetProductsModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  async getFavoriteProductsByTitle(
    @AuthenticatedUser() req: any,
    @Param('title') title: string,
  ): Promise<ProductEntity[]> {
    return this._favoriteProductsService.getFavoriteProductsByTitle(req, title);
  }

  @IsAuthenticated()
  @Get('get/flavourType/:title')
  @ApiResponse({
    type: ApiGetProductsModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  async getFavoriteProductsByFlavourType(
    @AuthenticatedUser() req: any,
    @Param('flavourType') flavourType: string,
  ): Promise<ProductEntity[]> {
    return this._favoriteProductsService.getFavoriteProductsByFlavourType(req, flavourType);
  }
}
