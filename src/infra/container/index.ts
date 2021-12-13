import { container } from 'tsyringe';

import './providers';

import IAccountRepository from '@modules/account/repositories/IAccountRepository';
import AccountRepository from '@modules/account/infra/typeorm/repositories/AccountRepository';

container.registerSingleton<IAccountRepository>(
  'AccountRepository',
  AccountRepository,
);
