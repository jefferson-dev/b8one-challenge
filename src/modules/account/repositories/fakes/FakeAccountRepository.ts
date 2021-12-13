import { v4 as uuid } from 'uuid';

import { IAccountDTO } from '@modules/account/dtos/IAccountDTO';
import Account from '@modules/account/infra/typeorm/entities/Account';
import IAccountRepository from '../IAccountRepository';

export default class FakeAccountRepository implements IAccountRepository {
  private account: Account[] = [];

  public async findAll(): Promise<Account[]> {
    return this.account;
  }

  public async findById(id: string): Promise<Account | undefined> {
    return this.account.find(account => account.id === id);
  }

  public async findByEmail(email: string): Promise<Account | undefined> {
    return this.account.find(account => account.email === email);
  }

  public async create(accountData: IAccountDTO): Promise<Account> {
    const account = new Account();

    Object.assign(account, { id: uuid() }, accountData);

    this.account.push(account);

    return account;
  }

  public async save(account: Account): Promise<Account> {
    const findIndex = this.account.findIndex(
      findAccount => findAccount.id === account.id,
    );

    this.account[findIndex] = account;

    return account;
  }

  public async delete(id: string): Promise<void> {
    const account = this.account.findIndex(account => account.id === id);

    if (account !== -1) {
      this.account.splice(account, 1);
    }
  }
}
