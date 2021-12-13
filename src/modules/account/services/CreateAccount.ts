import { injectable, inject } from 'tsyringe';

import IAccountRepository from '@modules/account/repositories/IAccountRepository';
import Accounts from '@modules/account/infra/typeorm/entities/Account';
import { IAccountDTO } from '@modules/account/dtos/IAccountDTO';
import AppError from '@infra/errors/AppError';
import IBcryptJS from '@infra/container/providers/hashPassword/interface/IBcryptJS';

@injectable()
export class CreateAccount {
  constructor(
    @inject('AccountRepository')
    private accountRepository: IAccountRepository,

    @inject('HashPassword')
    private hashPassword: IBcryptJS,
  ) {}

  public async execute(data: IAccountDTO): Promise<Accounts> {
    const userExiste = await this.accountRepository.findByEmail(data.email);

    if (userExiste) {
      throw new AppError('Email already exist.');
    }

    return this.accountRepository.create({
      ...data,
      password: await this.hashPassword.hash(data.password),
    });
  }
}
