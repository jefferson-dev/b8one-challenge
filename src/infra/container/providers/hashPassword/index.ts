import { container } from 'tsyringe';

import IBcryptJS from './interface/IBcryptJS';
import { BCryptJS } from './implementations/BcryptJS';

container.registerSingleton<IBcryptJS>('HashPassword', BCryptJS);
