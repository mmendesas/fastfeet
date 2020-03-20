import * as Yup from 'yup';
import { parseISO, isAfter, isBefore, setHours, startOfToday } from 'date-fns';
import { Op } from 'sequelize';

import Order from '../models/Order';
import User from '../models/User';
import File from '../models/File';
import Recipient from '../models/Recipient';

class DeliverymanOrdersController {
  async index(req, res) {
    // check if deliveryman exists
    const deliveryman = await User.findOne({
      where: {
        id: req.params.id,
        deliveryman: true,
      },
    });

    if (!deliveryman) {
      return res.status(401).json({ error: 'deliveryman not found' });
    }

    // get oders/deliveries by deliveryman
    const orders = await Order.findAll({
      where: {
        deliveryman_id: req.params.id,
        canceled_at: null,
        end_date: null,
      },
      attributes: [
        'id',
        'product',
        'canceled_at',
        'start_date',
        'end_date',
        'deliveryman_id',
      ],
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
    const schema = Yup.object().shape({
      start_date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'validation fails' });
    }

    const { id, delivery_id } = req.params;
    const { start_date } = req.body;

    // start_date must between  08:00 and 18:00h.
    if (
      isBefore(parseISO(start_date), setHours(startOfToday(), 8 - 3)) ||
      isAfter(parseISO(start_date), setHours(startOfToday(), 18 - 3))
    ) {
      return res
        .status(400)
        .json({ error: 'start_date must be between 8am and 18pm' });
    }

    // check if deliveryman exists
    const deliveryman = await User.findByPk(id, {
      where: {
        deliveryman: true,
      },
    });

    if (!deliveryman) {
      return res.status(401).json({ error: 'deliveryman not found' });
    }

    // check if order exists
    const order = await Order.findByPk(delivery_id);
    if (!order) {
      return res.status(401).json({ error: 'order not found' });
    }

    // check qty of orders from this deliveryman
    const { count } = await Order.findAndCountAll({
      where: {
        deliveryman_id: id,
        start_date: { [Op.ne]: null },
        signature_id: null,
      },
    });
    if (count === 5) {
      return res
        .status(400)
        .json({ error: 'You only be able to get 5 orders by day' });
    }

    await order.update({ start_date });
    return res.json({});
  }
}

export default new DeliverymanOrdersController();
