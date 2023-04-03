import { Get, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { ProductsController as Controller } from '../decorators';
import { ApiGetProductsModel } from '../models';
import { ProductsService } from '../services';

@Controller()
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
