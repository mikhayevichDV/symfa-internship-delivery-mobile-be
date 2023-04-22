import { ApiPropertyOptional } from '@nestjs/swagger';
import { ArrayMinSize, IsArray, IsOptional } from 'class-validator';

export class QueryGetProductsDto {
  @IsOptional()
  @IsArray({})
  @ArrayMinSize(1)
  @ApiPropertyOptional({ name: 'types[]' })
  types?: string[];

  @IsOptional()
  @IsArray({})
  @ArrayMinSize(1)
  @ApiPropertyOptional({ name: 'flavourTypes[]' })
  flavourTypes?: string[];

  @IsOptional()
  @ApiPropertyOptional({ name: 'title' })
  title: string;
}
