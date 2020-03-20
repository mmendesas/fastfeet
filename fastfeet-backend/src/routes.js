import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import FileController from './app/controllers/FileController';
import DeliverymanController from './app/controllers/DeliverymanController';
import DeliverymanOrdersController from './app/controllers/DeliverymanOrdersController';
import OrderController from './app/controllers/OrderController';
import DeliveryProblemController from './app/controllers/DeliveryProblemController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

// public routes
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.get('/deliveryman/:id/deliveries', DeliverymanOrdersController.index);
routes.put(
  '/deliveryman/:id/deliveries/:delivery_id',
  DeliverymanOrdersController.update
);

routes.get('/delivery/:id/problems', DeliveryProblemController.indexById);
routes.post('/delivery/:id/problems', DeliveryProblemController.store);

// private routes
routes.use(authMiddleware);
routes.put('/users', UserController.update);

routes.get('/recipients', RecipientController.index);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients', RecipientController.update);
routes.delete('/recipients/:id', RecipientController.delete);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/deliveryman', DeliverymanController.index);
routes.get('/deliveryman/:id', DeliverymanController.indexBy);
routes.post('/deliveryman', DeliverymanController.store);
routes.put('/deliveryman', DeliverymanController.update);
routes.delete('/deliveryman/:id', DeliverymanController.delete);

routes.get('/orders', OrderController.index);
routes.get('/orders/:id', OrderController.indexBy);
routes.post('/orders', OrderController.store);
routes.put('/orders', OrderController.update);
routes.delete('/orders/:id', OrderController.delete);

routes.get('/delivery-problems', DeliveryProblemController.index);
routes.delete('/problem/:id/cancel-delivery', DeliveryProblemController.delete);

export default routes;
