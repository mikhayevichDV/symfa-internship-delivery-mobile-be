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

  async getProductsByType(type: string): Promise<ProductEntity[]> {
    const queryBuilder = this._productRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.photo', 'photo')
      .where('product.type = :type', { type: type });

    return queryBuilder.getMany();
  }

  async getProductsByFlavourType(flavourType: string): Promise<ProductEntity[]> {
    const queryBuilder = this._productRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.photo', 'photo')
      .where('product.flavourType = :flavourType', { flavourType: flavourType });

    return queryBuilder.getMany();
  }
}
