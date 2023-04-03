import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from '@entities/users';

import { ApiAuthResponseModel, LoginUserDto } from '../models';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly _jwtService: JwtService,
    @InjectRepository(UserEntity)
    private readonly _authRepository: Repository<UserEntity>,
  ) {}

  async login(loginUserDto: LoginUserDto): Promise<ApiAuthResponseModel> {
    const user = await this._authRepository
      .createQueryBuilder('user')
      .select(['user.id', 'user.email', 'user.password'])
      .where('user.email = :email', { email: loginUserDto.email })
      .getOne();

    if (!user) {
      throw new UnprocessableEntityException(`User doesn't exist`);
    }

    const isPasswordCorrect = await bcrypt.compare(loginUserDto.password, user.password);

    if (!isPasswordCorrect) {
      throw new UnprocessableEntityException(`Check your password`);
    }

    delete user.password;

    return this._buildUserResponse(user);
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return this._authRepository.find({
      order: {
        createdAt: 'asc',
      },
    });
  }

  private _generateJwt(user: any): string {
    const payload = {
      email: user.email,
      sub: user.id,
    };

    return this._jwtService.sign(payload);
  }

  private _buildUserResponse(user: any): ApiAuthResponseModel {
    return {
      token: this._generateJwt(user),
    };
  }
}
