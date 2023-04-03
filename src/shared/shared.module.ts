import { DynamicModule, Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Config } from '@core/config';
import { ENTITIES } from '@entities/index';

import { UserModule } from './user';

@Global()
@Module({})
export class SharedModule {
  static share(): DynamicModule {
    const sharedModules = [
      TypeOrmModule.forRoot(Config.get.typeORMOptions),
      TypeOrmModule.forFeature(ENTITIES),
      UserModule.forRoot(),
    ];

    return {
      module: SharedModule,
      imports: sharedModules,
      exports: sharedModules,
    };
  }
}
