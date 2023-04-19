import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { OrderEntity } from '@entities/order';
import { PromoCodesEntity } from '@entities/promo-codes';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private _orderRepository: Repository<OrderEntity>,
    @InjectRepository(PromoCodesEntity)
    private _promocodesRepository: Repository<PromoCodesEntity>,
  ) {}

  async getOrder(userId: string): Promise<any> {
    const order = await this._orderRepository
      .createQueryBuilder('order')
      .leftJoinAndSelect('order.user', 'user')
      .leftJoinAndSelect('order.product', 'product')
      .leftJoinAndSelect('product.photo', 'photo')
      .where('order.user = :id', { id: userId })
      .getMany();

    return order.map((elem: OrderEntity) => {
      return { orderId: elem.id, count: elem.count, ...elem.product };
    });
  }

  async addToOrder(userId: string, productId: string): Promise<any> {
    const orderExist = await this._orderRepository.findOne({
      where: { user: { id: userId }, product: { id: productId } },
    });

    if (orderExist) {
      throw new BadRequestException('Order already exist');
    }

    const order = this._orderRepository.create({ user: { id: userId }, product: { id: productId }, count: 1 });

    await this._orderRepository.save(order);
  }

  async incrementCount(orderId: string) {
    const order = await this._orderRepository.findOne({
      where: { id: orderId },
    });

    order.count += 1;

    await this._orderRepository.save(order);
  }

  async decrementCount(orderId: string) {
    const order = await this._orderRepository.findOne({
      where: { id: orderId },
    });

    order.count -= 1;

    if (order.count < 0) {
      order.count = 0;
    }

    return await this._orderRepository.save(order);
  }

  async getTotal(userId: string) {
    const order = await this._orderRepository
      .createQueryBuilder('order')
      .leftJoinAndSelect('order.product', 'product')
      .where('order.user = :id', { id: userId })
      .getMany();

    const total = order.reduce((prev: number, cur: OrderEntity) => {
      prev += cur.count * cur.product.price;

      return prev;
    }, 0);

    return total.toFixed(2);
  }
}
