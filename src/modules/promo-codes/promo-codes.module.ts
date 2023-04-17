import { Module } from '@nestjs/common';

import { PromoCodesServices } from '@modules/promo-codes/services';

import { PromoCodesControllers } from './controllers';

@Module({
  controllers: [PromoCodesControllers],
  providers: [PromoCodesServices],
})
export class PromoCodesModule {}
