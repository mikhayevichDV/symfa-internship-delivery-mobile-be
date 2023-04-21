import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PromoCodesEntity } from '@entities/promo-codes';

@Injectable()
export class PromoCodesServices {
  constructor(
    @InjectRepository(PromoCodesEntity)
    private _promocodesRepository: Repository<PromoCodesEntity>,
  ) {}

  async getAllPromocodes() {
    const queryBuilder = this._promocodesRepository
      .createQueryBuilder('promo-codes')
      .select(['promo-codes.code', 'promo-codes.discount'])
      .getMany();

    return queryBuilder;
  }

  async getPromocode(code: string) {
    const queryBuilder = await this._promocodesRepository
      .createQueryBuilder('promo-codes')
      .where('promo-codes.code =:code', { code: code })
      .getOne();

    return queryBuilder.discount;
  }
}
