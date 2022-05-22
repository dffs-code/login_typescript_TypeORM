import { AppDataSource } from '../database/dataSource'
import { User } from '../entities/User';
import { compare } from 'bcrypt';

type LoginRequest = {
  firstParam: string
}
export class LoginService {
  async execute({firstParam}: LoginRequest): Promise<User | Error>{
    const repo = AppDataSource.getRepository(User);

    const userByEmail = await repo.findOneBy({email: firstParam});
    const userByPhone = await repo.findOneBy({phone: firstParam});
    
    if(!userByEmail && !userByPhone) return new Error('User not exists');
    return userByEmail || userByPhone;
  }
}