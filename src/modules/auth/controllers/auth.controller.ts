import { Body, Get, HttpStatus, Patch, Post, Req } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { UserEntity } from '@entities/users';
import { AuthenticatedUser, IsAuthenticated } from '@shared/user/decorators';
import { UserService } from '@shared/user/services';

import { AuthControllerDecorator as Controller } from '../decorators';
import { ApiAuthResponseModel, LoginUserDto, UpdateUserDto } from '../models';
import { AuthService } from '../services';

@Controller()
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly _authService: AuthService, private readonly _userService: UserService) {}

  @ApiResponse({ type: ApiAuthResponseModel })
  @Post('user/login')
  async login(@Body() loginUserDto: LoginUserDto): Promise<ApiAuthResponseModel> {
    return this._authService.login(loginUserDto);
  }

  @Get('users')
  async getAllUsers(): Promise<UserEntity[]> {
    return this._authService.getAllUsers();
  }

  @Patch('recover')
  @ApiResponse({
    status: HttpStatus.OK,
    isArray: true,
  })
  async update(@Body() { email, password }: LoginUserDto) {
    return this._authService.recoverPassword(email, password);
  }

  @IsAuthenticated()
  @Get('profile')
  getProfile(@Req() req: any) {
    return req.user;
  }

  @IsAuthenticated()
  @Patch('update')
  updateProfile(@AuthenticatedUser() req: any, @Body() { email, address, username }: UpdateUserDto) {
    return this._userService.update(req, { email, address, username });
  }
}
