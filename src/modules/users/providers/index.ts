import BcryptHashProvider from './HashProvider/implementations/BcryptHashProvider';
import { IHashProvider } from './HashProvider/models/IHashProvider';
import { container } from 'tsyringe';

container.registerSingleton<IHashProvider>('HashProvider', BcryptHashProvider)
