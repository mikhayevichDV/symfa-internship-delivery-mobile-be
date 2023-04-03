import { Module } from '@nestjs/common';

import { RegisterController } from '@modules/register/controllers/register.controller';
import { RegisterService } from '@modules/register/services';

@Module({
  controllers: [RegisterController],
  providers: [RegisterService],
})
export class RegisterModule {}
