import { injectable, inject } from 'tsyringe';

import IAccountRepository from '@modules/account/repositories/IAccountRepository';
import Account from '@modules/account/infra/typeorm/entities/Account';

@injectable()
export class ListAccount {
  constructor(
    @inject('AccountRepository')
    private accountRepository: IAccountRepository,
  ) {}

  public async execute(): Promise<Account[]> {
    return await this.accountRepository.findAll();
  }
}
