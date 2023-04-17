import { DeepPartial } from 'typeorm';

import { UserEntity } from '@entities/users';
import { DEFAULT_PASSWORD } from '@fixtures/models';
import { UserRole } from '@models/enum';

export const USERS_FIXTURES: DeepPartial<UserEntity>[] = [
  {
    id: 'ec0b9119-e2fb-43b5-9ad3-6b085fd11886',
    userId: 'SC10001',
    avatar: {
      id: 'c63e3ece-e06c-4c71-836e-515cb188e33b',
    },
    username: 'Ivanov',
    email: 'ivanov@gmail.com',
    address: 'Lomonosova 5',
    role: UserRole.Client,
    password: DEFAULT_PASSWORD,
    favoriteProducts: [
      {
        id: '3beaf567-df66-4989-ade7-72dfa2e050b0',
      },
      {
        id: 'd1ffaa62-31bf-4341-9140-3907db78cfd3',
      },
    ],
  },
  {
    id: '3465b5d4-9fd4-4d8b-a871-88304d1d5b1e',
    userId: 'SC10002',
    avatar: {
      id: '6565fc4b-5b66-4e03-a36f-40989a1f8788',
    },
    username: 'Petrova',
    email: 'petrov@gmail.com',
    address: 'Aladovyh 16',
    role: UserRole.Client,
    password: DEFAULT_PASSWORD,
    favoriteProducts: [
      {
        id: 'd1ffaa62-31bf-4341-9140-3907db78cfd3',
      },
      {
        id: 'cd5b2270-b9ed-4632-9f80-3aea9879a8ee',
      },
    ],
  },
  {
    id: 'd4266c12-f1f7-4ca5-bd31-deea114fe23b',
    userId: 'SC10003',
    avatar: {
      id: '1723b058-c217-4949-88b6-f98eb82be186',
    },
    username: 'Johnson',
    email: 'johnson@gmail.com',
    address: 'Razinskaya 1',
    role: UserRole.Client,
    password: DEFAULT_PASSWORD,
    favoriteProducts: [
      {
        id: 'cd5b2270-b9ed-4632-9f80-3aea9879a8ee',
      },
      {
        id: '13a6ad9c-9245-4051-8e9f-6c7671b05b08',
      },
    ],
  },
  {
    id: 'bee82d38-ef6d-4023-a370-f09aaae3ce09',
    userId: 'SC10004',
    avatar: {
      id: '5780ebef-8760-4be2-b360-13cf7ee20782',
    },
    username: 'Brown',
    email: 'brown@gmail.com',
    address: 'Molodezhnaya 13',
    role: UserRole.Client,
    password: DEFAULT_PASSWORD,
    favoriteProducts: [
      {
        id: '13a6ad9c-9245-4051-8e9f-6c7671b05b08',
      },
      {
        id: '1dac646f-fa6a-4db4-aee3-1ec09669d83b',
      },
    ],
  },
  {
    id: '429bf69f-c4c0-473e-9667-33dc53197aab',
    userId: 'SC10005',
    avatar: {
      id: 'e7009459-2bb1-45f2-bbbe-f9bb2dbd7ead',
    },
    username: 'Hall',
    email: 'hall@gmail.com',
    address: 'Vavilova 27',
    role: UserRole.Client,
    password: DEFAULT_PASSWORD,
    favoriteProducts: [
      {
        id: '1dac646f-fa6a-4db4-aee3-1ec09669d83b',
      },
      {
        id: '88c2881e-a8a4-4cec-99f7-16128bad9b0a',
      },
    ],
  },
  {
    id: 'f5bb173e-2f42-476f-a648-86c5c5840f2a',
    userId: 'SC10006',
    avatar: {
      id: 'ad24c9a2-11f9-401d-8881-523c5e663d14',
    },
    username: 'Perez',
    email: 'perez@gmail.com',
    address: 'Detskaya 33',
    role: UserRole.Client,
    password: DEFAULT_PASSWORD,
    favoriteProducts: [
      {
        id: '88c2881e-a8a4-4cec-99f7-16128bad9b0a',
      },
      {
        id: '02d6b9b5-b2b4-477c-b8b0-43fde68330c3',
      },
    ],
  },
  {
    id: '77cf7f42-5f56-43c2-adb6-30b277c5080a',
    userId: 'SC10007',
    avatar: {
      id: 'cb3f7a6a-de73-4ca8-926e-b37d5bdfb531',
    },
    username: 'King',
    email: 'king@gmail.com',
    address: 'Fomina 9',
    role: UserRole.Client,
    password: DEFAULT_PASSWORD,
    favoriteProducts: [
      {
        id: '02d6b9b5-b2b4-477c-b8b0-43fde68330c3',
      },
      {
        id: '6a00671f-1f55-4ff4-857c-ea5bd4556f52',
      },
    ],
  },
  {
    id: '583a8ac5-b3fa-46e3-be94-534481fa9125',
    userId: 'SC10008',
    avatar: {
      id: 'fb1e0852-4fc3-4ba8-a16c-7b1c44af107c',
    },
    username: 'Wright',
    email: 'wright@gmail.com',
    address: 'Vysokaya 10',
    role: UserRole.Client,
    password: DEFAULT_PASSWORD,
    favoriteProducts: [
      {
        id: '6a00671f-1f55-4ff4-857c-ea5bd4556f52',
      },
      {
        id: 'cb2e1214-b016-44ad-ae17-6fcf972af963',
      },
    ],
  },
  {
    id: '454a0af8-a4c8-4c96-8eaf-427e74f620f1',
    userId: 'SC10009',
    avatar: {
      id: '8e19d8ec-c40d-4008-ac9c-1dd6674daa0b',
    },
    username: 'Zhigimont',
    email: 'zhigimont@gmail.com',
    address: 'Kizhevatova 1',
    role: UserRole.Client,
    password: DEFAULT_PASSWORD,
    favoriteProducts: [
      {
        id: 'cb2e1214-b016-44ad-ae17-6fcf972af963',
      },
      {
        id: '1ed7c3d9-b82a-4bdb-9e6f-c10d3bf86230',
      },
    ],
  },
  {
    id: '54a7a57d-9862-4e9b-bff0-7b189e1c26a6',
    userId: 'SC10010',
    avatar: {
      id: 'a527eab2-9dea-4c9c-a991-1377f5d66a17',
    },
    username: 'Evans',
    email: 'evans@gmail.com',
    address: 'Vostochnaya 38',
    role: UserRole.Client,
    password: DEFAULT_PASSWORD,
    favoriteProducts: [
      {
        id: '1ed7c3d9-b82a-4bdb-9e6f-c10d3bf86230',
      },
      {
        id: '9104367f-27c1-417d-97a8-95daa22fbcd4',
      },
    ],
  },
];
