import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UserEditDto {
  @IsString()
  @ApiProperty({ example: '7e6c8965-9b6d-4964-8c15-01d426323a14' })
  avatarId: string;

  @ApiProperty({ example: 'Moskovskaya st.' })
  address: string;

  @ApiProperty({ example: 'Moskaluk' })
  username: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'moskaluk@gmail.com' })
  email: string;
}
