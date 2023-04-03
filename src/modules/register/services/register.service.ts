import { Injectable } from '@nestjs/common';

import { UserService } from '@shared/user/services';

import { UserDto } from '../models';

@Injectable()
export class RegisterService {
  constructor(private _registerRepository: UserService) {}

  async createUser(user: UserDto) {
    return this._registerRepository.create(user);
  }
}
