import { Body, Get, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { UserEntity } from '@entities/users';
import { AuthService } from '@modules/auth/services';

import { AuthControllerDecorator as Controller } from '../decorators';
import { ApiAuthResponseModel, LoginUserDto } from '../models';

@Controller()
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @ApiResponse({ type: ApiAuthResponseModel })
  @Post('user/login')
  async login(@Body() loginUserDto: LoginUserDto): Promise<ApiAuthResponseModel> {
    return this._authService.login(loginUserDto);
  }

  @Get('users')
  async getAllUsers(): Promise<UserEntity[]> {
    return this._authService.getAllUsers();
  }
}
