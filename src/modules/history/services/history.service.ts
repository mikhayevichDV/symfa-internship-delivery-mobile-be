import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { HistoryEntity } from '@entities/history';
import { UserEntity } from '@entities/users';
import { OrderStatus, UserRole } from '@models/enum';
import { CreateHistoryDto } from '@modules/history/models';

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(HistoryEntity)
    private _historyRepository: Repository<HistoryEntity>,
    @InjectRepository(UserEntity)
    private _userRepository: Repository<UserEntity>,
  ) {}

  async getHistory(userId: string) {
    const history = await this._historyRepository
      .createQueryBuilder('history')
      .leftJoinAndSelect('history.user', 'user')
      .leftJoinAndSelect('history.courier', 'courier')
      .where('history.user = :id', { id: userId })
      .getMany();

    return history;
  }

  async create(userId: string, { total, address }: CreateHistoryDto) {
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

      const history = this._historyRepository.create({
        user: { id: userId },
        ...{ total, address },
        status: OrderStatus.kitchen,
        orderId: orderId,
        courier: [couriers[chooseCourier]],
      });

      console.log(history);

      await this._historyRepository.save(history);
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
