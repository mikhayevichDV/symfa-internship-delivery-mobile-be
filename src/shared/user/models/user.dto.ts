import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  @ApiProperty({ example: 'Mikhayevich' })
  username: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Mikhayevich@gmail.com' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Podnebesnaya st.' })
  address: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'passDima' })
  password: string;
}
