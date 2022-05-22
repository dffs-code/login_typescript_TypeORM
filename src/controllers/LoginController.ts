import { Request, Response } from 'express';
import { LoginService } from '../services/LoginService';
import { compare } from 'bcrypt';

export class LoginController {
  async handle(request: Request, response: Response) {
    const { firstParam, password } = request.body;

    const service = new LoginService();

    const user = await service.execute({ firstParam });

    if (user instanceof Error) {
      return response.status(404).json({message: user.message});
    }

    compare(password, user.password, (err, result) => {
      if (err) return response.status(500).json({ message: 'Desculpe, algo deu errado!' });

      if (!result) return response.status(401).json({ message: 'Credenciais Inválidas' });

      return response.status(200).json(user);
    })

  }
}