import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'enable es6' }));

export default routes;
