import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductEntity } from '@entities/product';
import { QueryGetProductsDto } from '@modules/products/models';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private _productRepository: Repository<ProductEntity>,
  ) {}

  async getProducts({ types, title }: QueryGetProductsDto): Promise<any> {
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
        'product.photo',
      ]);

    if (types) {
      queryBuilder.andWhere('product.type IN (:...types)', { types });
    }

    if (title) {
      queryBuilder.andWhere('product.title LIKE :title', { title: `%${title}%` });
    }

    return queryBuilder.getMany();
  }

  async getProductById(id: string) {
    const queryBuilder = this._productRepository
      .createQueryBuilder('product')
      .where('product.id = :id', { id: id })
      .getOne();

    return queryBuilder;
  }

  async getTypes() {
    const queryBuilder = this._productRepository
      .createQueryBuilder('product')
      .select(['product.type'])
      .distinct(true)
      .getRawMany();

    return queryBuilder;
  }

  async getFlavourTypes() {
    const queryBuilder = this._productRepository
      .createQueryBuilder('product')
      .select(['product.flavourType'])
      .distinct(true)
      .getRawMany();

    return queryBuilder;
  }
}
