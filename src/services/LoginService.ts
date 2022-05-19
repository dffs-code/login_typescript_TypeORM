import { AppDataSource } from '../database/dataSource'
import { User } from '../entities/User';
import { compare } from 'bcrypt';

type LoginRequest = {
  email: string,
  password: string
}
export class LoginService {
  async execute({email, password}: LoginRequest): Promise<User | Error>{
    const repo = AppDataSource.getRepository(User);

    const user = await repo.findOneBy({email});
    
    if(!user) return new Error('User not exists');
    return user;
  }
}