import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({ example: 'petrov@gmail.com' })
  readonly email: string;

  @ApiProperty({ example: 'Petrov228' })
  readonly username: string;

  @ApiProperty({ example: 'Podnebesnaya st' })
  readonly address: string;
}
