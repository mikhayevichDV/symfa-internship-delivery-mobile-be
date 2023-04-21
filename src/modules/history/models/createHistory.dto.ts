import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateHistoryDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Podnebesnaya st.' })
  address: string;

  @ApiProperty({ example: '13' })
  total: string;
}
