import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { FavoriteProductsEntity } from '@entities/favorite-products';
import { QueryGetProductsDto } from '@modules/products/models';

@Injectable()
export class FavoriteProductsService {
  constructor(
    @InjectRepository(FavoriteProductsEntity)
    private _favoriteProductsRepository: Repository<FavoriteProductsEntity>,
  ) {}

  async getFavoriteProducts(req: any, { flavourTypes, title }: QueryGetProductsDto): Promise<any> {
    const favoriteProducts = await this._favoriteProductsRepository
      .createQueryBuilder(`favorite_products`)
      .leftJoin('favorite_products.user', 'user')
      .leftJoinAndSelect('favorite_products.product', 'product')
      .where('user.id = :id', { id: req.user.id });

    if (flavourTypes) {
      favoriteProducts.andWhere('product.flavourType IN (:...flavourTypes)', { flavourTypes });
    }

    if (title) {
      favoriteProducts.andWhere('product.title LIKE :title', { title: `%${title}%` });
    }

    const result = await favoriteProducts.getMany();

    return result.map((elem: FavoriteProductsEntity) => {
      return elem.product;
    });
  }

  async addFavoriteProduct(req: any, productId: string): Promise<any> {
    const favProductExist = await this._favoriteProductsRepository.findOne({
      where: { user: { id: req.user.id }, product: { id: productId } },
    });

    const favProduct = this._favoriteProductsRepository.create({
      user: { id: req.user.id },
      product: { id: productId },
    });

    if (favProductExist) {
      return await this._favoriteProductsRepository
        .createQueryBuilder('favorite_products')
        .delete()
        .where('favorite_products.id =:id', { id: favProductExist.id })
        .execute();
    }

    return await this._favoriteProductsRepository.save(favProduct);
  }
}
