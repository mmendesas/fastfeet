import DeliveryProblem from '../models/DeliveryProblem';
import Order from '../models/Order';

class DeliveryProblemController {
  async index(req, res) {
    const problems = await DeliveryProblem.findAll();
    return res.json(problems);
  }

  async indexById(req, res) {
    // check if order exists
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(401).json({ error: 'order not found' });
    }

    const problems = await DeliveryProblem.findAll({
      where: { delivery_id: req.params.id },
    });

    return res.json(problems);
  }

  async store(req, res) {
    // check if order exists
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(401).json({ error: 'order not found' });
    }

    const problem = await DeliveryProblem.create({
      ...req.body,
      delivery_id: req.params.id,
    });

    return res.json(problem);
  }

  async delete(req, res) {
    const { delivery_id } = await DeliveryProblem.findByPk(req.params.id);
    const delivery = await Order.findByPk(delivery_id);

    // cancel delivery
    delivery.canceled_at = new Date();
    delivery.save();

    return res.json(delivery);
  }
}

export default new DeliveryProblemController();
