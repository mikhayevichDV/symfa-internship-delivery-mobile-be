import { DeepPartial } from 'typeorm';

import { PromoCodesEntity } from '@entities/promo-codes';
import { AbstractLoader, IRelationsOptions } from '@fixtures/abstract-loader';
import { PROMO_CODES_FIXTURES } from '@fixtures/dev/data/promo-codes';
import { EnvironmentType } from '@models/enum';

export class PromoCodes extends AbstractLoader<PromoCodesEntity> {
  entity: new () => PromoCodesEntity = PromoCodesEntity;

  data: DeepPartial<PromoCodesEntity>[] = PROMO_CODES_FIXTURES;

  environments: EnvironmentType[] = [EnvironmentType.Development];

  relations: IRelationsOptions[] = [];
}
