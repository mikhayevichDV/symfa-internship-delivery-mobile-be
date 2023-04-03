import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Config } from '@core/config';
import { UserEntity } from '@entities/users';
import { UserDto } from '@modules/register/models';

import { UserEditDto } from '../models';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private _userRepository: Repository<UserEntity>,
  ) {}

  async create({ password: plainPassword, email, ...userData }: UserDto) {
    try {
      const password = await bcrypt.hash(plainPassword, Config.get.hashSalt);

      const lastUserId = await this._getLastUserId(this._userRepository);
      const userId = 'SC' + `${+lastUserId.slice(2) + 1}`;

      const user = await this._userRepository.create({ ...userData, userId, email, password });

      await this._userRepository.save(user);

      delete user.password;

      return user;
    } catch (error) {
      throw new BadRequestException('user with that email already exists');
    }
  }

  async update(id: string, { avatarId, ...userData }: UserEditDto) {
    await this._userRepository.update(id, { ...userData, avatar: { id: avatarId } });
  }

  private async _getLastUserId(repository: Repository<UserEntity>): Promise<string> {
    const queryBuilder = repository
      .createQueryBuilder('user')
      .addOrderBy('user.createdAt', 'DESC')
      .select(['user.userId']);
    const { userId } = await queryBuilder.getOne();

    return userId;
  }
}
