import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { GetAllUsersController } from './controllers/GetAllUsersController';
import { LoginController } from './controllers/LoginController';

const routes = Router();

routes
  .get('/users/all', new GetAllUsersController().handle)
  .post('/register', new CreateUserController().handle)
  .post('/login', new LoginController().handle)

  export { routes }