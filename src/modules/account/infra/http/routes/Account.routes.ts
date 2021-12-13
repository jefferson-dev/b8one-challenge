import { Router } from 'express';

import { AccountController } from '@modules/account/infra/http/controllers/AccountController';
import { validate } from '../middlewares/validated';

import { CreateAccountSchema, UpdateAccountSchema } from '../schemas';

const accountRouter = Router();
const accountController = new AccountController();

accountRouter.get('/', accountController.index);

accountRouter.get('/:id', accountController.show);

accountRouter.post('/', validate(CreateAccountSchema), accountController.store);

accountRouter.put(
  '/:id',
  validate(UpdateAccountSchema),
  accountController.update,
);

accountRouter.delete('/:id', accountController.delete);

export default accountRouter;
