import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { HistoryEntity } from '@entities/history';
import { OrderEntity } from '@entities/order';
import { UserEntity } from '@entities/users';
import { OrderStatus, UserRole } from '@models/enum';
import { CreateHistoryDto } from '@modules/history/models';
import { OrderService } from '@modules/order/services';

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(HistoryEntity)
    private _historyRepository: Repository<HistoryEntity>,
    @InjectRepository(UserEntity)
    private _userRepository: Repository<UserEntity>,
    @InjectRepository(OrderEntity)
    private _orderRepository: Repository<OrderEntity>,

    private readonly _orderService: OrderService,
  ) {}

  async getHistory(req: any) {
    const history = await this._historyRepository
      .createQueryBuilder('history')
      .select([
        'history.updatedAt',
        'history.address',
        'history.id',
        'history.total',
        'history.orderId',
        'history.deliveryTime',
        'history.status',
      ])
      .leftJoinAndSelect('history.user', 'user')
      .leftJoinAndSelect('history.courier', 'courier')
      .leftJoinAndSelect('courier.avatar', 'avatar')
      .where('history.user = :id', { id: req.user.id })
      .orderBy('history.updatedAt', 'DESC')
      .getMany();

    return history;
  }

  async create(req: any, { total, address }: CreateHistoryDto) {
    try {
      let lastOrderId = await this._getLastOrderId();

      if (!lastOrderId) {
        lastOrderId = 'OU10000';
      }

      const orderId = 'OU' + `${+lastOrderId.slice(2) + 1}`;

      const couriers = await this._userRepository
        .createQueryBuilder('couriers')
        .select(['couriers.id'])
        .where('couriers.role =:user_role', { user_role: UserRole.Courier })
        .getMany();

      const chooseCourier = Math.floor(Math.random() * couriers.length);
      const deliveryTime = await this._orderService.getDeliveryTime(req.user.id);
      const subtotal = total ? total : await this._orderService.getTotal(req);

      const history = this._historyRepository.create({
        user: { id: req.user.id },
        ...{ address },
        status: OrderStatus.prepare,
        deliveryTime: deliveryTime,
        orderId: orderId,
        total: +subtotal,
        courier: [couriers[chooseCourier]],
      });

      await this._historyRepository.save(history);

      await this._orderRepository
        .createQueryBuilder('order')
        .delete()
        .where('user.id =:id', { id: req.user.id })
        .execute();

      let time = history.deliveryTime;

      const timerId = setInterval(() => {
        time--;

        if (time === 0) {
          this._historyRepository.update(history.id, { status: OrderStatus.delivered });
        }

        this._historyRepository.update(history.id, { deliveryTime: time });
      }, 1000);

      setTimeout(() => {
        clearInterval(timerId);
      }, 1000 * history.deliveryTime + 1000);
    } catch (error) {
      throw new BadRequestException(`${error}`);
    }
  }

  private async _getLastOrderId(): Promise<string | undefined> {
    const queryBuilder = this._historyRepository
      .createQueryBuilder('history')
      .addOrderBy('history.createdAt', 'DESC')
      .select(['history.orderId']);
    const { orderId } = (await queryBuilder.getOne()) ?? {};

    return orderId;
  }
}
