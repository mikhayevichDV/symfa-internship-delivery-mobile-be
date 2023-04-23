import { ApiProperty } from '@nestjs/swagger';

import { UserEntity } from '@entities/users';

export class ApiGetProductsModel {
  @ApiProperty({
    example: '02d6b9b5-b2b4-477c-b8b0-43fde68330c3',
  })
  id: string;

  @ApiProperty({
    example: 'Fried salmon',
  })
  title: string;

  @ApiProperty({
    example: 'Fish',
  })
  type: string;

  @ApiProperty({
    example: 'Sour',
  })
  flavourType: string;

  @ApiProperty({
    example: 'description',
  })
  description: string;

  @ApiProperty({
    example: '4.3',
  })
  rating: number;

  @ApiProperty({
    example: '25',
  })
  deliveryTime: number;

  @ApiProperty({
    example: '14',
  })
  price: number;

  @ApiProperty({
    example: {
      photo: 'product-photo/fish-with-pomegranate.jpg',
    },
  })
  photo: string;

  @ApiProperty({
    example: '',
  })
  users: UserEntity[];
}
