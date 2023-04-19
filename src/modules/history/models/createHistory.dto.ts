import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateHistoryDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: '145.14' })
  total: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Podnebesnaya st.' })
  address: string;
}
