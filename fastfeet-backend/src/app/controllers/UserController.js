import * as Yup from 'yup';

import User from '../models/User';

class UserController {
  async store(req, res) {
    // validate paylooad against schema
    const schema = Yup.object({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'validation fails' });
    }

    const { email } = req.body;

    // check if user already exists
    const user = await User.findOne({ where: { email } });
    if (user) {
      return res.status(401).json({ error: 'user already exists' });
    }

    // register user in DB
    const { id, name } = await User.create(req.body);

    return res.json({ id, name, email });
  }

  async update(req, res) {
    // validate paylooad against schema
    const schema = Yup.object({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'validation fails' });
    }

    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    // check if email exists if user is changing current
    if (email && email !== user.email) {
      // check if user already exists
      const userExists = await User.findOne({ where: { email } });
      if (userExists) {
        return res.status(401).json({ error: 'user already exists' });
      }
    }

    // oldpassword is equal current
    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'password does not match' });
    }

    const { id, name } = await user.update(req.body);

    return res.json({ id, name, email });
  }
}

export default new UserController();
