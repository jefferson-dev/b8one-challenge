import FakeAccountRepository from '@modules/account/repositories/fakes/FakeAccountRepository';
import { ShowAccount } from '@modules/account/services';

let fakeAccountRepository: FakeAccountRepository;
let showAccount: ShowAccount;

describe('ShowAccount', () => {
  beforeEach(() => {
    fakeAccountRepository = new FakeAccountRepository();
    showAccount = new ShowAccount(fakeAccountRepository);
  });

  it('should be able to list one account', async () => {
    const accountTest = await fakeAccountRepository.create({
      name: 'John Doe',
      age: 27,
      email: 'johndoe@account.com',
      password: '12345678',
    });

    const account = await showAccount.execute(accountTest.id);

    expect(account).toEqual(accountTest);
  });
});
