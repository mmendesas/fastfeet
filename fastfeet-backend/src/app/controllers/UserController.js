import User from '../models/User';

class UserController {
  async store(req, res) {
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
