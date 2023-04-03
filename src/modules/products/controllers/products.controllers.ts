import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { ApiGetProductsModel } from '@modules/products/models/api-get-products.model';
import { ProductsService } from '@modules/products/services/products.service';

@Controller('products')
@ApiTags('products')
export class ProductsControllers {
  constructor(private readonly _productsService: ProductsService) {}

  @Get('all')
  @ApiResponse({
    type: ApiGetProductsModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  async getAllCourses() {
    return this._productsService.getAllProducts();
  }
}
