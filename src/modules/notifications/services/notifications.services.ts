import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { HistoryEntity } from '@entities/history';

@Injectable()
export class NotificationsServices {
  constructor(
    @InjectRepository(HistoryEntity)
    private _historyRepository: Repository<HistoryEntity>,
  ) {}

  async getNotification(userId: string) {
    const notification = await this._historyRepository
      .createQueryBuilder('history')
      .leftJoinAndSelect('history.user', 'user')
      .leftJoinAndSelect('history.courier', 'courier')
      .where('history.user = :id', { id: userId })
      .getMany();

    return notification;
  }
}
