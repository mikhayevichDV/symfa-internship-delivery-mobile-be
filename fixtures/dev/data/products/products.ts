import { DeepPartial } from 'typeorm';

import { ProductEntity } from '@entities/product';

export const PRODUCTS_FIXTURES: DeepPartial<ProductEntity>[] = [
  {
    id: '3beaf567-df66-4989-ade7-72dfa2e050b0',
    title: 'Chicken kebab',
    type: 'Fast food',
    flavourType: 'Spicy',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ac odio tempor orci dapibus.',
    rating: 4.3,
    deliveryTime: 25,
    price: 10.4,
    photo: 'product-photo/chicken-kebab.jpg',
  },
  {
    id: 'd1ffaa62-31bf-4341-9140-3907db78cfd3',
    title: 'Chicken with vegetables',
    type: 'Fast food',
    flavourType: 'Sour',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ac odio tempor orci dapibus.',
    rating: 4.3,
    deliveryTime: 35,
    price: 10.4,
    photo: 'product-photo/chicken-with-vegetables.jpg',
  },
  {
    id: 'cd5b2270-b9ed-4632-9f80-3aea9879a8ee',
    title: 'Chinese salad',
    type: 'Vegetarian',
    flavourType: 'Spicy',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ac odio tempor orci dapibus.',
    rating: 4.3,
    deliveryTime: 40,
    price: 10.4,
    photo: 'product-photo/chinese-salad.jpg',
  },
  {
    id: '13a6ad9c-9245-4051-8e9f-6c7671b05b08',
    title: 'Fish with pomegranate',
    type: 'Fish',
    flavourType: 'Sweet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ac odio tempor orci dapibus.',
    rating: 3,
    deliveryTime: 34,
    price: 10,
    photo: 'product-photo/fish-with-pomegranate.jpg',
  },
  {
    id: '1dac646f-fa6a-4db4-aee3-1ec09669d83b',
    title: 'For vegetarian',
    type: 'Vegetarian',
    flavourType: 'Salty',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ac odio tempor orci dapibus.',
    rating: 4,
    deliveryTime: 55,
    price: 1,
    photo: 'product-photo/for-vegetarian.jpg',
  },
  {
    id: '88c2881e-a8a4-4cec-99f7-16128bad9b0a',
    title: 'Fried fish',
    type: 'Fish',
    flavourType: 'Salty',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ac odio tempor orci dapibus.',
    rating: 4.3,
    deliveryTime: 39,
    price: 10.4,
    photo: 'product-photo/fried-fish.jpg',
  },
  {
    id: '02d6b9b5-b2b4-477c-b8b0-43fde68330c3',
    title: 'Fried salmon',
    type: 'Fish',
    flavourType: 'Sour',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ac odio tempor orci dapibus.',
    rating: 4.3,
    deliveryTime: 51,
    price: 14,
    photo: 'product-photo/fried-salmon.jpg',
  },
  {
    id: '6a00671f-1f55-4ff4-857c-ea5bd4556f52',
    title: 'Meatballs and fries',
    type: 'Meat',
    flavourType: 'Salty',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ac odio tempor orci dapibus.',
    rating: 4.3,
    deliveryTime: 46,
    price: 8,
    photo: 'product-photo/meat-balls-and-fries.jpg',
  },
  {
    id: 'cb2e1214-b016-44ad-ae17-6fcf972af963',
    title: 'Meat with fries',
    type: 'Meat',
    flavourType: 'Spicy',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ac odio tempor orci dapibus.',
    rating: 4.3,
    deliveryTime: 48,
    price: 10.4,
    photo: 'product-photo/meat-with-fries.jpg',
  },
  {
    id: '1ed7c3d9-b82a-4bdb-9e6f-c10d3bf86230',
    title: 'Shashlik',
    type: 'Fast food',
    flavourType: 'Spicy',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ac odio tempor orci dapibus.',
    rating: 4.3,
    deliveryTime: 60,
    price: 4,
    photo: 'product-photo/shashlik.jpg',
  },
  {
    id: '9104367f-27c1-417d-97a8-95daa22fbcd4',
    title: 'Spaghetti',
    type: 'Italian',
    flavourType: 'Sour',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ac odio tempor orci dapibus.',
    rating: 4.3,
    deliveryTime: 44,
    price: 2,
    photo: 'product-photo/spaghetti.jpg',
  },
];
