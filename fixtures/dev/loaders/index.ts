import { ProductPhotoLoader } from '@fixtures/dev/loaders/product-photo';
import { ProductsLoader } from '@fixtures/dev/loaders/products';
import { PromoCodes } from '@fixtures/dev/loaders/promo-codes/promo-codes';
import { UserAvatarLoader } from '@fixtures/dev/loaders/user-avatar';
import { UsersLoader } from '@fixtures/dev/loaders/users';

export const DEV_LOADERS = [UserAvatarLoader, ProductPhotoLoader, ProductsLoader, UsersLoader, PromoCodes];
