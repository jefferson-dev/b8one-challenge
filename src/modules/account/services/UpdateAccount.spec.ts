import AppError from '@infra/errors/AppError';
import FakeAccountRepository from '@modules/account/repositories/fakes/FakeAccountRepository';
import { UpdateAccount } from '@modules/account/services';

let fakeAccountRepository: FakeAccountRepository;
let updateAccount: UpdateAccount;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeAccountRepository = new FakeAccountRepository();

    updateAccount = new UpdateAccount(fakeAccountRepository);
  });

  it('should be able to update the a account', async () => {
    const account = await fakeAccountRepository.create({
      name: 'John Doe',
      age: 27,
      email: 'johndoe@account.com',
      password: '12345678',
    });

    const updatedAccount = await updateAccount.execute({
      id: account.id,
      data: {
        name: 'John Trê',
        age: 27,
        email: 'johntre@account.com',
        password: '12345678',
      },
    });

    expect(updatedAccount.name).toBe('John Trê');
    expect(updatedAccount.email).toBe('johntre@account.com');
  });

  it('should not be able to update non-existing account', async () => {
    await expect(
      updateAccount.execute({
        id: 'non-existing-account-id',
        data: {
          name: 'John Doe',
          age: 27,
          email: 'johndoe@account.com',
          password: '12345678',
        },
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
