import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import FileController from './app/controllers/FileController';
import DeliverymanController from './app/controllers/DeliverymanController';
import OrderController from './app/controllers/OrderController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

// public routes
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// private routes
routes.use(authMiddleware);
routes.put('/users', UserController.update);
routes.post('/recipients', RecipientController.store);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/deliveryman', DeliverymanController.index);
routes.post('/deliveryman', DeliverymanController.store);
routes.put('/deliveryman', DeliverymanController.update);
routes.delete('/deliveryman/:id', DeliverymanController.delete);

routes.get('/orders', OrderController.index);
routes.post('/orders', OrderController.store);
routes.put('/orders', OrderController.update);
routes.delete('/orders/:id', OrderController.delete);

export default routes;
