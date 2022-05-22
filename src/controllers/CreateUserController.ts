import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';
import generateHashedPassword from '../utils/generateHashedPassword';

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password, phone, accept_terms, accept_newsletter } = request.body;

    if(!name  || !email || !password || !phone || !accept_terms || !accept_newsletter) return response.status(400).json({message: 'Missing Information'})

    const service = new CreateUserService();

    const hashedPassword = generateHashedPassword(password);

    const result = await service.execute({ name, email, phone, password: hashedPassword, accept_terms, accept_newsletter });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(201).json(result);
  }
}