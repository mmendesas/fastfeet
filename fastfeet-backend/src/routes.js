import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';

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

routes.post('/files', upload.single('file'), (req, res) => {
  return res.json({ ok: true });
});

export default routes;
