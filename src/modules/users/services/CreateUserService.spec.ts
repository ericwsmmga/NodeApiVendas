import AppError from "@shared/errors/AppError";
import FakeUsersRepository from "../domain/repositories/fakes/FakeUsersRepository";
import FakeHashProvider from "../providers/HashProvider/fakes/FakeHashProvider";
import CreateUserService from "./CreateUserService";


let fakeUsersRepository: FakeUsersRepository
let createUserService: CreateUserService
let hashProvider: FakeHashProvider
describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository()
    hashProvider = new FakeHashProvider()
    createUserService = new CreateUserService(fakeUsersRepository, hashProvider)
  })

  it('Should be able to create a new user', async () => {

    const user = await createUserService.execute({
      name: 'Eric William',
      email: 'ericwsmmga@gmail.com',
      password: '123456'
    })

    expect(user).toHaveProperty('id')
    expect(user.name).toBe('Eric William')
    expect(user.email).toBe('ericwsmmga@gmail.com')
  })

  it('Should not be able to create two Customer with same email', async () => {
    await createUserService.execute({
      name: 'Eric William',
      email: 'ericwsmmga@gmail.com',
      password: '123456'
    })

    expect(createUserService.execute({
      name: 'Eric Marques',
      email: 'ericwsmmga@gmail.com',
      password: '123456'
    }),
    ).rejects.toBeInstanceOf(AppError)
  })
});
