import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'token not provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    // check if req header has authenticated valid token
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    req.userId = decoded.id; // set userId for each req
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'token invalid' });
  }
};
