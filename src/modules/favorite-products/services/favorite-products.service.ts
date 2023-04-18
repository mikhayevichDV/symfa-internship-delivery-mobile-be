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

  async getFavoriteProducts(userId: string): Promise<any> {
    const products = await this._userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.favoriteProducts', 'products')
      .leftJoinAndSelect('products.photo', 'photo')
      .where('user.id = :id', { id: userId })
      .getMany();

    return products
      .map((elem: UserEntity) => {
        return elem.favoriteProducts;
      })
      .flat(1);
  }

  async getFavoriteProductsByFlavourType(userId: string, flavourType: string): Promise<any> {
    const products = await this._userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.favoriteProducts', 'products')
      .leftJoinAndSelect('products.photo', 'photo')
      .where('user.id = :id', { id: userId })
      .getMany();

    const test = products.map((elem: UserEntity) => {
      return elem.favoriteProducts;
    });

    const test2 = test.filter((elem: any) => {
      return elem['flavourType'] === flavourType;
    });

    return test2;
  }

  async addFavoriteProduct(userId: string, productId: string): Promise<void> {
    const user = await this._userRepository.findOne({ where: { id: userId }, relations: ['favoriteProducts'] });

    user.favoriteProducts.push({ id: productId } as unknown as ProductEntity);

    await this._userRepository.save(user);
  }
}
