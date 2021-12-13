import FakeAccountRepository from '@modules/account/repositories/fakes/FakeAccountRepository';
import { ListAccount } from '@modules/account/services';

let fakeAccountRepository: FakeAccountRepository;
let listAccount: ListAccount;

describe('ListAccount', () => {
  beforeEach(() => {
    fakeAccountRepository = new FakeAccountRepository();
    listAccount = new ListAccount(fakeAccountRepository);
  });

  it('should be able to list all account', async () => {
    const accountTest1 = await fakeAccountRepository.create({
      name: 'John Doe',
      age: 27,
      email: 'johndoe@account.com',
      password: '12345678',
    });

    const accountTest2 = await fakeAccountRepository.create({
      name: 'John Trê',
      age: 27,
      email: 'johntre@account.com',
      password: '12345678',
    });

    const account = await listAccount.execute();

    expect(account).toEqual([accountTest1, accountTest2]);
  });
});
