import * as Yup from 'yup';

import Order from '../models/Order';
import User from '../models/User';
import File from '../models/File';
import Recipient from '../models/Recipient';

import NewOrderMail from '../jobs/NewOrderMail';
import Queue from '../../lib/Queue';

class OrderController {
  async store(req, res) {
    // validate data
    const schema = Yup.object({
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      product: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'order validation fails' });
    }

    const { deliveryman_id, recipient_id } = req.body;

    // check if recipient exists
    const recipient = await Recipient.findByPk(recipient_id);
    if (!recipient) {
      return res.status(401).json({ error: 'recipient not found' });
    }

    // check if deliveryman_id is a deliveryman
    const isDeliveryman = await User.findOne({
      where: {
        id: deliveryman_id,
        deliveryman: true,
      },
    });

    if (!isDeliveryman) {
      return res
        .status(401)
        .json({ error: 'you can only create orders for deliveryman' });
    }

    // send email
    await Queue.add(NewOrderMail.key, {
      deliveryman: isDeliveryman,
      recipient,
      product: req.body.product,
    });

    const {
      id,
      product,
      signature_id,
      start_date,
      end_date,
      canceled_at,
    } = await Order.create(req.body);

    return res.json({
      id,
      product,
      recipient_id,
      deliveryman_id,
      signature_id,
      start_date,
      end_date,
      canceled_at,
    });
  }

  async index(req, res) {
    const orders = await Order.findAll({
      attributes: ['id', 'product', 'canceled_at', 'start_date', 'end_date'],
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['name', 'street', 'zipcode'],
        },
        {
          model: User,
          as: 'deliveryman',
          attributes: ['name', 'email'],
        },
        {
          model: File,
          as: 'signature',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });
    return res.json(orders);
  }

  async update(req, res) {
    // validate data
    const schema = Yup.object({
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      product: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'order validation fails' });
    }

    return res.json({ ok: true });
  }

  async delete(req, res) {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(401).json({ error: 'order not found' });
    }

    order.destroy();
    return res.json();
  }

  async indexBy(req, res) {
    const order = await Order.findByPk(req.params.id, {
      attributes: ['id', 'product'],
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['id', 'name'],
        },
        {
          model: User,
          as: 'deliveryman',
          attributes: ['name', 'email'],
        },
        {
          model: File,
          as: 'signature',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    if (!order) {
      return res.status(400).json({ error: 'order does not exist' });
    }

    return res.json(order);
  }
}

export default new OrderController();
