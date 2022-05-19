import { AppDataSource } from '../database/dataSource'
import { User } from '../entities/User';


export class GetAllUsersService {
  async execute(){
    const repo = AppDataSource.getRepository(User);

    const users = await repo.find();

    return users;
  }
}