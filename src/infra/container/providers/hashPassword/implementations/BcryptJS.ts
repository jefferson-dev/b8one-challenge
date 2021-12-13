import { hash } from 'bcryptjs';
import IBcryptJS from '../interface/IBcryptJS';

export class BCryptJS implements IBcryptJS {
  public async hash(password: string): Promise<string> {
    return hash(password, 8);
  }
}
