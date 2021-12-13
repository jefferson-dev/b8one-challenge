import { injectable, inject } from 'tsyringe';

import { IUpdateAccountDTO } from '@modules/account/dtos/IAccountDTO';
import IAccountRepository from '@modules/account/repositories/IAccountRepository';
import Account from '@modules/account/infra/typeorm/entities/Account';

import AppError from '@infra/errors/AppError';

@injectable()
export class UpdateAccount {
  constructor(
    @inject('AccountRepository')
    private accountRepository: IAccountRepository,
  ) {}

  public async execute({ id, data }: IUpdateAccountDTO): Promise<Account> {
    const account = await this.accountRepository.findById(id);

    if (!account) {
      throw new AppError('Account not found');
    }

    account.name = data.name;
    account.email = data.email;
    account.password = data.password;

    return this.accountRepository.save(account);
  }
}
