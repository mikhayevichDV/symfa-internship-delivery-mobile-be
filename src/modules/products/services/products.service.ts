import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductEntity } from '@entities/product';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(ProductEntity) private _productRepository: Repository<ProductEntity>) {}

  async getAllProducts() {
    const queryBuilder = this._productRepository
      .createQueryBuilder('product')
      .select([
        'product.id',
        'product.title',
        'product.type',
        'product.flavourType',
        'product.description',
        'product.rating',
        'product.price',
        'photo',
      ])
      .innerJoin('product.photo', 'photo');

    return queryBuilder.getMany();
  }
}
