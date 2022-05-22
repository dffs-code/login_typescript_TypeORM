import { AppDataSource } from '../database/dataSource'
import { User } from '../entities/User'

type UserRequest = {
  name: string,
  phone: string,
  email: string,
  password: string,
  accept_terms: boolean,
  accept_newsletter: boolean,
}

export class CreateUserService {
  async execute({name, phone, email, password, accept_terms, accept_newsletter}: UserRequest): Promise<User | Error> {
    const repo = AppDataSource.getRepository(User);

    if(await repo.findOneBy({email})){
      return new Error('User already exists');
    }

    const newUser = repo.create({
      name, 
      phone, 
      email, 
      password,
      accept_terms,
      accept_newsletter
    });

    await repo.save(newUser);

    return newUser;
  }
}