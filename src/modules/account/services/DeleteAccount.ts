import { injectable, inject } from 'tsyringe';

import IAccountRepository from '@modules/account/repositories/IAccountRepository';

@injectable()
export class DeleteAccount {
  constructor(
    @inject('AccountRepository')
    private accountRepository: IAccountRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    return await this.accountRepository.delete(id);
  }
}
