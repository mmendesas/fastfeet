import DeliveryProblem from '../models/DeliveryProblem';

import Order from '../models/Order';
import User from '../models/User';
import Recipient from '../models/Recipient';

import Queue from '../../lib/Queue';
import CancelOrderMail from '../jobs/CancelOrderMail';

class DeliveryProblemController {
  async index(req, res) {
    const problems = await DeliveryProblem.findAll({
      attributes: ['id', 'description', 'delivery_id'],
      order: ['id'],
      include: [
        {
          model: Order,
          as: 'delivery',
          attributes: ['canceled_at'],
        },
      ],
    });

    // see only active problems
    const noCanceled = problems.filter(
      item => item.delivery && !item.delivery.canceled_at
    );

    return res.json(noCanceled);
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

    // get info from delivery
    const deliveryman = await User.findByPk(delivery.deliveryman_id);
    const recipient = await Recipient.findByPk(delivery.recipient_id);

    // send mail
    await Queue.add(CancelOrderMail.key, {
      deliveryman,
      recipient,
      product: delivery.product,
    });

    // cancel delivery
    delivery.canceled_at = new Date();
    delivery.save();

    return res.json(delivery);
  }
}

export default new DeliveryProblemController();
