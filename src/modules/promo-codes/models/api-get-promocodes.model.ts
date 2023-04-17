import { ApiProperty } from '@nestjs/swagger';

export class ApiGetPromocodesModel {
  @ApiProperty({ example: 'Oblomoff' })
  code: string;

  @ApiProperty({ example: 10 })
  discount: number;
}
