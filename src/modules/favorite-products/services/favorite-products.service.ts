import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductEntity } from '@entities/product';
import { UserEntity } from '@entities/users';

@Injectable()
export class FavoriteProductsService {
  constructor(
    @InjectRepository(UserEntity)
    private _userRepository: Repository<UserEntity>,
  ) {}

  async getFavoriteProducts(req: any): Promise<ProductEntity[]> {
    const products = await this._userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.favoriteProducts', 'products')
      .leftJoinAndSelect('products.photo', 'photo')
      .where('user.id = :id', { id: req.user.id })
      .getMany();

    return products
      .map((elem: UserEntity) => {
        return elem.favoriteProducts;
      })
      .flat(1);
  }

  async addFavoriteProduct(req: any, productId: string): Promise<void> {
    const user = await this._userRepository.findOne({ where: { id: req.user.id }, relations: ['favoriteProducts'] });

    user.favoriteProducts.push({ id: productId } as unknown as ProductEntity);

    await this._userRepository.save(user);
  }

  async getFavoriteProductsByTitle(req: any, title: string): Promise<ProductEntity[]> {
    const products = await this._userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.favoriteProducts', 'products')
      .leftJoinAndSelect('products.photo', 'photo')
      .where('user.id = :id', { id: req.user.id })
      .where('products.title = :title', { title: title })
      .getMany();

    return products
      .map((elem: UserEntity) => {
        return elem.favoriteProducts;
      })
      .flat(1);
  }

  async getFavoriteProductsByFlavourType(req: any, flavourType: string): Promise<ProductEntity[]> {
    const products = await this._userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.favoriteProducts', 'products')
      .leftJoinAndSelect('products.photo', 'photo')
      .where('user.id = :id', { id: req.user.id })
      .where('products.flavourType = :flavourType', { flavourType: flavourType })
      .getMany();

    return products
      .map((elem: UserEntity) => {
        return elem.favoriteProducts;
      })
      .flat(1);
  }
}
