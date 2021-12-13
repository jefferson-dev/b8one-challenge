import 'reflect-metadata';
import 'dotenv/config';

import express from 'express';
import 'express-async-errors';

import appRouter from '@infra/http/routes';
import globalError from '@infra/errors/GlobalError';

import '@infra/typeorm/database';
import '@infra/container';

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(appRouter);
app.use(globalError);

app.listen(PORT, () => {
  console.log(`Server is started in :${PORT}`);
});

export default app;
