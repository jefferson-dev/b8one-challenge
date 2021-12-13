import FakeAccountRepository from '@modules/account/repositories/fakes/FakeAccountRepository';
import { CreateAccount } from '@modules/account/services';
import { BCryptJS } from '@infra/container/providers/hashPassword/implementations/BcryptJS';

import AppError from '@infra/errors/AppError';

let fakeAccountRepository: FakeAccountRepository;
let createAccount: CreateAccount;
let hashPassword: BCryptJS;

describe('CreateAccount', () => {
  beforeEach(() => {
    fakeAccountRepository = new FakeAccountRepository();
    hashPassword = new BCryptJS();
    createAccount = new CreateAccount(fakeAccountRepository, hashPassword);
  });

  it('should be able to create a new account', async () => {
    const account = await createAccount.execute({
      name: 'John Doe',
      age: 27,
      email: 'johndoe@account.com',
      password: '12345678',
    });

    expect(account).toHaveProperty('id');
  });

  it('should not be able to create a new account with same cpf from another account', async () => {
    await createAccount.execute({
      name: 'John Doe',
      age: 27,
      email: 'johndoe@account.com',
      password: '12345678',
    });

    await expect(
      createAccount.execute({
        name: 'John Doe',
        age: 27,
        email: 'johndoe@account.com',
        password: '12345678',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
