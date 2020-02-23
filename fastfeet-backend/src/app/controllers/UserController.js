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
    return res.json({ ok: true });
  }
}

export default new UserController();
