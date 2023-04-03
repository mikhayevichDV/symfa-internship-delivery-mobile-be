import { ProductPhotoEntity } from '@entities/product-photo';
import { AbstractLoader, IRelationsOptions } from '@fixtures/abstract-loader';
import { PRODUCT_PHOTO_FIXTURES } from '@fixtures/dev/data/product-photo';
import { EnvironmentType } from '@models/enum';

export class ProductPhotoLoader extends AbstractLoader<ProductPhotoEntity> {
  entity: new () => ProductPhotoEntity = ProductPhotoEntity;

  data: Partial<ProductPhotoEntity>[] = PRODUCT_PHOTO_FIXTURES;

  environments: EnvironmentType[] = [EnvironmentType.Development];

  relations: IRelationsOptions[] = [];
}
