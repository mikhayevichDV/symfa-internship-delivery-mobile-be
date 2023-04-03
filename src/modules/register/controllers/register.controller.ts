import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { RegisterService } from '@modules/register/services';

import { UserDto } from '../models';

@Controller()
@ApiTags('register')
export class RegisterController {
  constructor(private _registerService: RegisterService) {}

  @Post('registration')
  @ApiResponse({
    status: HttpStatus.OK,
  })
  async register(@Body() user: UserDto) {
    return this._registerService.createUser(user);
  }
}
