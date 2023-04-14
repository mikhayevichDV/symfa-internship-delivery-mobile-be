import { Body, Get, HttpStatus, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { ProductEntity } from '@entities/product';
import { AwareIdDto } from '@models/dto';
import { UserService } from '@shared/user/services';

import { ProductsController as Controller } from '../decorators';
import { ApiGetProductsModel } from '../models';
import { ProductsService } from '../services';

@Controller()
@ApiTags('Products')
export class ProductsControllers {
  constructor(private readonly _productsService: ProductsService, private readonly _userService: UserService) {}

  @Get('all')
  @ApiResponse({
    type: ApiGetProductsModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  async getAllProducts() {
    return this._productsService.getAllProducts();
  }

  @Get('id/:id')
  @ApiResponse({
    type: ApiGetProductsModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  async getProductById(@Param('id', ParseUUIDPipe) id: string): Promise<ProductEntity> {
    return this._productsService.getProductById(id);
  }

  @Get('title/:title')
  @ApiResponse({
    type: ApiGetProductsModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  async getProductByTitle(@Param('title') title: string): Promise<ProductEntity> {
    return this._productsService.getProductByTitle(title);
  }

  @Get('types')
  @ApiResponse({
    type: ApiGetProductsModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  async getTypes() {
    return this._productsService.getTypes();
  }

  @Get('flavourTypes')
  @ApiResponse({
    type: ApiGetProductsModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  async getFlavourTypes() {
    return this._productsService.getFlavourTypes();
  }

  @Get('type/:type')
  @ApiResponse({
    type: ApiGetProductsModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  async getProductsByType(@Param('type') type: string): Promise<ProductEntity[]> {
    return this._productsService.getProductsByType(type);
  }

  @Get('flavourType/:flavourType')
  @ApiResponse({
    type: ApiGetProductsModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  async getProductsByFlavourType(@Param('flavourType') flavourType: string): Promise<ProductEntity[]> {
    return this._productsService.getProductsByFlavourType(flavourType);
  }

  @Get('favoriteProducts/:id')
  @ApiResponse({
    type: ApiGetProductsModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  async getFavoriteProducts(@Param('id', ParseUUIDPipe) id: string): Promise<any> {
    return this._userService.getFavoriteProducts(id);
  }

  @Post('addFavoriteProduct/:id')
  @ApiResponse({
    type: ApiGetProductsModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  async addFavoriteProduct(@Param('id', ParseUUIDPipe) userId: string, @Body() product: AwareIdDto): Promise<any> {
    return this._userService.addFavoriteProduct(userId, product.id);
  }
}
