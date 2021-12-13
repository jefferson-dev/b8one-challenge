import FakeAccountRepository from '@modules/account/repositories/fakes/FakeAccountRepository';
import { DeleteAccount } from '@modules/account/services';

let fakeAccountRepository: FakeAccountRepository;
let deleteAccount: DeleteAccount;

describe('DeleteAccount', () => {
  beforeEach(() => {
    fakeAccountRepository = new FakeAccountRepository();
    deleteAccount = new DeleteAccount(fakeAccountRepository);
  });

  it('should be able to list one account', async () => {
    const accountTest = await fakeAccountRepository.create({
      name: 'John Doe',
      age: 27,
      email: 'johndoe@account.com',
      password: '12345678',
    });

    expect(await deleteAccount.execute(accountTest.id)).toBeUndefined();
  });
});
