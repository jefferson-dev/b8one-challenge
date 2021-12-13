import { Router } from 'express';

import accountsRouter from '@modules/account/infra/http/routes/Account.routes';

const appRouter = Router();

appRouter.get('/', (request, response) => {
  response.json({ message: 'API is running.' });
});

appRouter.use('/accounts', accountsRouter);

export default appRouter;
