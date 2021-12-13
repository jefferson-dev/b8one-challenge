import { getRepository, Repository } from 'typeorm';

import IAccountRepository from '@modules/account/repositories/IAccountRepository';
import { IAccountDTO } from '@modules/account/dtos/IAccountDTO';

import Account from '@modules/account/infra/typeorm/entities/Account';

export default class AccountRepository implements IAccountRepository {
  private ormRepository: Repository<Account>;

  constructor() {
    this.ormRepository = getRepository(Account);
  }

  public async findAll(): Promise<Account[]> {
    return this.ormRepository.find();
  }

  public async findById(id: string): Promise<Account | undefined> {
    return this.ormRepository.findOne(id);
  }

  public async findByEmail(email: string): Promise<Account | undefined> {
    return this.ormRepository.findOne({ where: { email } });
  }

  public async create(data: IAccountDTO): Promise<Account> {
    const account = this.ormRepository.create(data);

    await this.ormRepository.save(account);

    return account;
  }

  public async save(data: IAccountDTO): Promise<Account> {
    return this.ormRepository.save(data);
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
