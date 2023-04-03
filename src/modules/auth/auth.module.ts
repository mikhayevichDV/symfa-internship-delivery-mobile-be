import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Config } from '@core/config';
import { UserEntity } from '@entities/users';

import { AuthController } from './controllers';
import { JwtStrategy } from './models';
import { AuthService } from './services';

@Module({
  imports: [JwtModule.register({ secret: Config.get.hashKeyForJwtToken }), TypeOrmModule.forFeature([UserEntity])],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, Repository],
})
export class AuthModule {}
