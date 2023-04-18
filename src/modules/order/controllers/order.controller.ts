import { Body, Get, HttpStatus, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { AwareIdDto } from '@models/dto';
import { OrderService } from '@modules/order/services/order.service';
import { ApiGetProductsModel } from '@modules/products/models';

import { OrderController as Controller } from '../decorators';

@Controller()
@ApiTags('order')
export class OrderControllers {
  constructor(private readonly _orderService: OrderService) {}

  @Get('get/:id')
  @ApiResponse({
    status: HttpStatus.OK,
    isArray: true,
  })
  async getOrder(@Param('id', ParseUUIDPipe) id: string): Promise<any> {
    return this._orderService.getOrder(id);
  }

  @Get('total/get/:id')
  @ApiResponse({
    status: HttpStatus.OK,
    isArray: true,
  })
  async getTotal(@Param('id', ParseUUIDPipe) id: string): Promise<any> {
    return this._orderService.getTotal(id);
  }

  @Post('add/:id')
  @ApiResponse({
    type: ApiGetProductsModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  async addToOrder(@Param('id', ParseUUIDPipe) userId: string, @Body() product: AwareIdDto): Promise<any> {
    return this._orderService.addToOrder(userId, product.id);
  }

  @Patch('increment/:id')
  @ApiResponse({
    type: ApiGetProductsModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  async incrementCount(@Param('id', ParseUUIDPipe) orderId: string) {
    return this._orderService.incrementCount(orderId);
  }

  @Patch('decrement/:id')
  @ApiResponse({
    type: ApiGetProductsModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  async decrementCount(@Param('id', ParseUUIDPipe) orderId: string) {
    return this._orderService.decrementCount(orderId);
  }
}
