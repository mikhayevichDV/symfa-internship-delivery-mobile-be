import { Body, Get, HttpStatus, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { AwareIdDto } from '@models/dto';
import { OrderService } from '@modules/order/services/order.service';
import { ApiGetProductsModel } from '@modules/products/models';
import { AuthenticatedUser, IsAuthenticated } from '@shared/user/decorators';

import { OrderController as Controller } from '../decorators';

@Controller()
@ApiTags('Order')
export class OrderControllers {
  constructor(private readonly _orderService: OrderService) {}

  @IsAuthenticated()
  @Get('get')
  @ApiResponse({
    status: HttpStatus.OK,
    isArray: true,
  })
  async getOrder(@AuthenticatedUser() req: any): Promise<any> {
    return this._orderService.getOrder(req);
  }

  @IsAuthenticated()
  @Get('total/get')
  @ApiResponse({
    status: HttpStatus.OK,
    isArray: true,
  })
  async getTotal(@AuthenticatedUser() req: any): Promise<any> {
    return this._orderService.getTotal(req);
  }

  @IsAuthenticated()
  @Post('add')
  @ApiResponse({
    type: ApiGetProductsModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  async addToOrder(@AuthenticatedUser() req: any, @Body() product: AwareIdDto): Promise<any> {
    return this._orderService.addToOrder(req, product.id);
  }

  @IsAuthenticated()
  @Patch('increment/:id')
  @ApiResponse({
    type: ApiGetProductsModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  async incrementCount(@Param('id', ParseUUIDPipe) orderId: string) {
    return this._orderService.incrementCount(orderId);
  }

  @IsAuthenticated()
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
