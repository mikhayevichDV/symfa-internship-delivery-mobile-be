import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductEntity } from '@entities/product';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private _productRepository: Repository<ProductEntity>,
  ) {}

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
      .innerJoin('product.photo', 'photo')
      .getMany();

    return queryBuilder;
  }

  async getProductById(id: string) {
    const queryBuilder = this._productRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.photo', 'photo')
      .where('product.id = :id', { id: id })
      .getOne();

    return queryBuilder;
  }

  async getProductByTitle(title: string) {
    const queryBuilder = this._productRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.photo', 'photo')
      .where('product.title = :title', { title: title })
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

  async getProductsByType(type: string): Promise<ProductEntity[]> {
    const queryBuilder = this._productRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.photo', 'photo')
      .where('product.type = :type', { type: type })
      .getMany();

    return queryBuilder;
  }

  async getProductsByFlavourType(flavourType: string): Promise<ProductEntity[]> {
    const queryBuilder = this._productRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.photo', 'photo')
      .where('product.flavourType = :flavourType', { flavourType: flavourType })
      .getMany();

    return queryBuilder;
  }
}
