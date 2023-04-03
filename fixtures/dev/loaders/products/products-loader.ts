import { DeepPartial } from 'typeorm';

import { ProductEntity } from '@entities/product';
import { AbstractLoader, IRelationsOptions } from '@fixtures/abstract-loader';
import { PRODUCTS_FIXTURES } from '@fixtures/dev/data/products';
import { EnvironmentType } from '@models/enum';

export class ProductsLoader extends AbstractLoader<ProductEntity> {
  entity: new () => ProductEntity = ProductEntity;

  data: DeepPartial<ProductEntity>[] = PRODUCTS_FIXTURES;

  environments: EnvironmentType[] = [EnvironmentType.Development];

  relations: IRelationsOptions[] = [];
}
