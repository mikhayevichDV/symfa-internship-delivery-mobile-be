import { Get, HttpStatus, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { ProductEntity } from '@entities/product';

import { ProductsController as Controller } from '../decorators';
import { ApiGetProductsModel } from '../models';
import { ProductsService } from '../services';

@Controller()
@ApiTags('Products')
export class ProductsControllers {
  constructor(private readonly _productsService: ProductsService) {}

  @Get('all')
  @ApiResponse({
    type: ApiGetProductsModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  async getAllProducts() {
    return this._productsService.getAllProducts();
  }

  @Get('type/:type')
  @ApiResponse({
    type: ApiGetProductsModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  getProductsByType(@Param('type') type: string): Promise<ProductEntity[]> {
    return this._productsService.getProductsByType(type);
  }

  @Get('flavourType/:flavourType')
  @ApiResponse({
    type: ApiGetProductsModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  getProductsByFlavourType(@Param('flavourType') flavourType: string): Promise<ProductEntity[]> {
    return this._productsService.getProductsByFlavourType(flavourType);
  }
}
