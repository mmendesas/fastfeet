import * as Yup from 'yup';
import { Op } from 'sequelize';

import User from '../models/User';
import File from '../models/File';

class DeliverymanController {
  async index(req, res) {
    const { q: query } = req.query;

    const defaultOptions = {
      where: { deliveryman: true },
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: {
        model: File,
        as: 'avatar',
        attributes: ['name', 'path', 'url'],
      },
    };

    const optionsWithQuery = {
      ...defaultOptions,
      where: {
        deliveryman: true,
        name: {
          [Op.iLike]: `%${query}%`,
        },
      },
    };

    const options = query ? optionsWithQuery : defaultOptions;

    const deliveryman = await User.findAll(options);
    return res.json(deliveryman);
  }

  async indexBy(req, res) {
    const deliveryman = await User.findByPk(req.params.id, {
      attributes: ['id', 'name', 'email', 'avatar_id', 'created_at'],
      include: {
        model: File,
        as: 'avatar',
        attributes: ['name', 'path', 'url'],
      },
    });

    if (!deliveryman) {
      return res.status(401).json({ error: 'User not found' });
    }

    return res.json(deliveryman);
  }

  async store(req, res) {
    const { email } = req.body;

    // check if user already exists
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(401).json({ error: 'user already exists' });
    }

    // register user in DB
    const { id, name, avatar_id } = await User.create({
      ...req.body,
      deliveryman: true,
    });

    return res.json({ id, name, email, avatar_id });
  }

  async update(req, res) {
    // validate payload
    const schema = Yup.object({
      name: Yup.string(),
      email: Yup.string()
        .email()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'deliveryman validation fails' });
    }

    const { email } = req.body;
    const user = await User.findOne({ where: { email } });

    const { id, name, avatar_id } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
      avatar_id,
    });
  }

  async delete(req, res) {
    const deliveryman = await User.findByPk(req.params.id);

    if (!deliveryman) {
      res.status(401).json({
        error: 'user with this id doesn`t exists',
      });
    }

    deliveryman.destroy();
    return res.json();
  }
}

export default new DeliverymanController();
