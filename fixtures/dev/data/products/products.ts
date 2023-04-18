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
    photo: {
      id: '7e6c8965-9b6d-4964-8c15-01d426323a14',
    },
    users: [
      {
        id: 'ec0b9119-e2fb-43b5-9ad3-6b085fd11886',
      },
    ],
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
    photo: {
      id: 'ec114e9d-ae1f-41f7-acf2-c2cd6e91aae9',
    },
    users: [
      {
        id: 'ec0b9119-e2fb-43b5-9ad3-6b085fd11886',
      },
      {
        id: '3465b5d4-9fd4-4d8b-a871-88304d1d5b1e',
      },
    ],
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
    photo: {
      id: 'f2e46957-e345-43df-bc4f-fe857a6f2c1d',
    },
    users: [
      {
        id: '3465b5d4-9fd4-4d8b-a871-88304d1d5b1e',
      },
      {
        id: 'd4266c12-f1f7-4ca5-bd31-deea114fe23b',
      },
    ],
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
    photo: {
      id: 'c0cdb54d-8c61-4d48-a3d6-dd860c0835b7',
    },
    users: [
      {
        id: 'd4266c12-f1f7-4ca5-bd31-deea114fe23b',
      },
      {
        id: 'bee82d38-ef6d-4023-a370-f09aaae3ce09',
      },
    ],
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
    photo: {
      id: '4dda48bd-eb54-417f-a018-c3f3988fe210',
    },
    users: [
      {
        id: 'bee82d38-ef6d-4023-a370-f09aaae3ce09',
      },
      {
        id: '429bf69f-c4c0-473e-9667-33dc53197aab',
      },
    ],
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
    photo: {
      id: 'db708730-b491-4513-a65e-ca483b667e45',
    },
    users: [
      {
        id: '429bf69f-c4c0-473e-9667-33dc53197aab',
      },
      {
        id: 'f5bb173e-2f42-476f-a648-86c5c5840f2a',
      },
    ],
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
    photo: {
      id: 'e7e49a39-6238-41a3-9f51-d5454f50957c',
    },
    users: [
      {
        id: 'f5bb173e-2f42-476f-a648-86c5c5840f2a',
      },
      {
        id: '77cf7f42-5f56-43c2-adb6-30b277c5080a',
      },
    ],
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
    photo: {
      id: '09eb1a13-0a73-4cab-a1dc-1c6d6f109666',
    },
    users: [
      {
        id: '77cf7f42-5f56-43c2-adb6-30b277c5080a',
      },
      {
        id: '583a8ac5-b3fa-46e3-be94-534481fa9125',
      },
    ],
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
    photo: {
      id: '7af188b8-222f-47a9-8b26-8ca1cce5da43',
    },
    users: [
      {
        id: '583a8ac5-b3fa-46e3-be94-534481fa9125',
      },
      {
        id: '454a0af8-a4c8-4c96-8eaf-427e74f620f1',
      },
    ],
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
    photo: {
      id: 'c3788634-b00a-4803-88bb-1cd13a6578bd',
    },
    users: [
      {
        id: '454a0af8-a4c8-4c96-8eaf-427e74f620f1',
      },
      {
        id: '54a7a57d-9862-4e9b-bff0-7b189e1c26a6',
      },
    ],
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
    photo: {
      id: '6d8bd06d-421a-4ec9-92b2-4090cfeed989',
    },
    users: [
      {
        id: '54a7a57d-9862-4e9b-bff0-7b189e1c26a6',
      },
    ],
  },
];
