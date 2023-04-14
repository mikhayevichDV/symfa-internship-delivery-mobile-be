import { ApiProperty, OmitType } from '@nestjs/swagger';

import { ProductPhotoEntity } from '@entities/product-photo';
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
      id: 'c0cdb54d-8c61-4d48-a3d6-dd860c0835b7',
      photoPath: 'product-photo/fish-with-pomegranate.jpg',
    },
  })
  @ApiProperty({
    example: '',
  })
  photo: ProductPhotoEntity;

  @ApiProperty({
    example: '',
  })
  users: UserEntity[];
}

export class TestDto extends OmitType(ApiGetProductsModel, ['id', 'users']) {}
