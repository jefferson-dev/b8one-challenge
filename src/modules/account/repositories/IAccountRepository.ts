import Account from '@modules/account/infra/typeorm/entities/Account';
import { IAccountDTO } from '@modules/account/dtos/IAccountDTO';

export default interface IAccountRepository {
  findAll(): Promise<Account[]>;
  findById(id: string): Promise<Account | undefined>;
  findByEmail(email: string): Promise<Account | undefined>;
  create(data: IAccountDTO): Promise<Account>;
  save(data: IAccountDTO): Promise<Account>;
  delete(id: string): Promise<void>;
}
