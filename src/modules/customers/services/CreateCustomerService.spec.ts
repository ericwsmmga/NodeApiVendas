import AppError from '@shared/errors/AppError';
import 'reflect-metadata'
import FakeCustomersRepository from "../domain/repositories/fakes/FakeCustomersRepository";
import CreateCustomerService from "./CreateCustomerService";

let fakeCustomersRepository: FakeCustomersRepository
let createCustomerService: CreateCustomerService

describe('CreateCustomer', () => {
  beforeEach(() => {
    fakeCustomersRepository = new FakeCustomersRepository()
    createCustomerService = new CreateCustomerService(fakeCustomersRepository)
  })

  it('Should be able to create a new Customer', async () => {

    const customer = await createCustomerService.execute({
      name: 'Eric William',
      email: 'ericwsmmga@gmail.com'
    })

    expect(customer).toHaveProperty('id')
    expect(customer.name).toBe('Eric William')
    expect(customer.email).toBe('ericwsmmga@gmail.com')
  })

  it('Should not be able to create two Customer with same email', async () => {
    await createCustomerService.execute({
      name: 'Eric William',
      email: 'ericwsmmga@gmail.com'
    })

    expect(createCustomerService.execute({
      name: 'Eric Marques',
      email: 'ericwsmmga@gmail.com'
    }),
    ).rejects.toBeInstanceOf(AppError)
  })
});
