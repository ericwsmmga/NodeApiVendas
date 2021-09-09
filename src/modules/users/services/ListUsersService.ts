import { getCustomRepository } from 'typeorm';
import UsersRepository from '../repositories/UserRepository';
import User from '../typeorm/entities/User';

class ListUsersService {
  public async execute(): Promise<User[]> {
    const usersRepository = getCustomRepository(UsersRepository);

    const users = usersRepository.find();

    return users;
  }
}

export default ListUsersService;
