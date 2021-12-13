import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';

import {
  ListAccount,
  ShowAccount,
  CreateAccount,
  UpdateAccount,
  DeleteAccount,
} from '@modules/account/services';

export class AccountController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listAccount = container.resolve(ListAccount);

    return response.json(instanceToInstance(await listAccount.execute()));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showAccount = container.resolve(ShowAccount);

    return response.json(instanceToInstance(await showAccount.execute(id)));
  }

  public async store(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const createAccount = container.resolve(CreateAccount);

    return response.json(instanceToInstance(await createAccount.execute(data)));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const data = request.body;

    const updateAccount = container.resolve(UpdateAccount);

    return response.json(
      instanceToInstance(await updateAccount.execute({ id, data })),
    );
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteAccount = container.resolve(DeleteAccount);

    return response.json(await deleteAccount.execute(id));
  }
}
