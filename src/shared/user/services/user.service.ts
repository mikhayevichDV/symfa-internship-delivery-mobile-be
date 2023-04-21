import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Config } from '@core/config';
import { ProductEntity } from '@entities/product';
import { UserEntity } from '@entities/users';
import { UpdateUserDto } from '@modules/auth/models';

import { UserDto } from '../models';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private _userRepository: Repository<UserEntity>,
    @InjectRepository(ProductEntity)
    private _productRepository: Repository<ProductEntity>,
  ) {}

  async create({ password: plainPassword, email, address, ...userData }: UserDto) {
    try {
      const password = await bcrypt.hash(plainPassword, Config.get.hashSalt);

      const lastUserId = await this._getLastUserId(this._userRepository);
      const userId = 'SC' + `${+lastUserId.slice(2) + 1}`;

      const avatar = { id: '24ff68b-fc3f-4647-8be9-0ea4cc0d4e25' };

      const user = await this._userRepository.create({ ...userData, userId, email, address, password, avatar });

      await this._userRepository.save(user);

      delete user.password;

      return user;
    } catch (error) {
      throw new BadRequestException(`${error}`);
    }
  }

  async update(req: any, { ...updateData }: UpdateUserDto) {
    await this._userRepository.update(req.user.id, { ...updateData });
  }

  private async _getLastUserId(repository: Repository<UserEntity>): Promise<string> {
    const queryBuilder = repository
      .createQueryBuilder('user')
      .addOrderBy('user.createdAt', 'DESC')
      .select(['user.userId']);
    const { userId } = await queryBuilder.getOne();

    return userId;
  }

  async _getUserById(inputId: string): Promise<UserEntity> {
    const user = this._userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.avatar', 'avatar')
      .where('user.id = :id', { id: inputId })
      .getOne();

    return user;
  }
}
