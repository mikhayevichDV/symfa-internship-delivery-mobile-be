import { Get, HttpStatus, Param, ParseUUIDPipe, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { ProductEntity } from '@entities/product';
import { UserService } from '@shared/user/services';

import { ProductsController as Controller } from '../decorators';
import { ApiGetProductsModel, QueryGetProductsDto } from '../models';
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
  async getProducts(@Query() dto: QueryGetProductsDto) {
    return this._productsService.getProducts(dto);
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

  @Get('flavourType/:flavourType')
  @ApiResponse({
    type: ApiGetProductsModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  async getProductsByFlavourType(@Param('flavourType') flavourType: string): Promise<ProductEntity[]> {
    return this._productsService.getProductsByFlavourType(flavourType);
  }
}
