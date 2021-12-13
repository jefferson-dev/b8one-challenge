import { injectable, inject } from 'tsyringe';

import IAccountRepository from '@modules/account/repositories/IAccountRepository';
import Account from '@modules/account/infra/typeorm/entities/Account';

@injectable()
export class ShowAccount {
  constructor(
    @inject('AccountRepository')
    private accountRepository: IAccountRepository,
  ) {}

  public async execute(id: string): Promise<Account | undefined> {
    return await this.accountRepository.findById(id);
  }
}
