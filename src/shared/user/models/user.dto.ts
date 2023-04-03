import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: '5780ebef-8760-4be2-b360-13cf7ee20782' })
  avatarId: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Danik' })
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Moskaluk' })
  surname: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'moskaluk@gmail.com' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: '+375298905765' })
  phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Bratskaya 2' })
  address: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'passDanik' })
  password: string;
}
