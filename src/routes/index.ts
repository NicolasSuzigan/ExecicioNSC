import { Router } from 'express';
import UserController from '../controllers/UserController';

const routes = Router();

routes.get('/users', UserController.index);
routes.delete('/users/del/:id', UserController.Delete);
routes.put('/users/updated/:id', UserController.Updated);
routes.get('/users/:id', UserController.indexId);
routes.get('/users/consultcpf/:id', UserController.indexCPF);
routes.post('/users', UserController.store);

export default routes;
