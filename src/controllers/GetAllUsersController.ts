import { Request, Response } from 'express';
import { GetAllUsersService } from '../services/GetAllUsersService'; 

export class GetAllUsersController {
  async handle(request: Request, response: Response) {
    const repo = new GetAllUsersService();
    const result = await repo.execute();

    return response.json(result)
  }
}