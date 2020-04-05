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
        'status',
      ],
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['name', 'street', 'number', 'state', 'city', 'zipcode'],
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
      start_date: Yup.date(),
      end_date: Yup.date(),
      signature_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'validation fails' });
    }

    const { id, delivery_id } = req.params;
    const { start_date, end_date, signature_id } = req.body;

    // check if deliveryman exists
    const deliveryman = await User.findByPk(id, {
      where: { deliveryman: true },
    });

    if (!deliveryman) {
      return res.status(401).json({ error: 'deliveryman not found' });
    }

    // check if order exists
    const order = await Order.findByPk(delivery_id);
    if (!order) {
      return res.status(401).json({ error: 'order not found' });
    }

    // 1 flow -> start the delivery
    if (start_date) {
      // start_date must between  08:00 and 18:00h.
      if (
        isBefore(parseISO(start_date), setHours(startOfToday(), 8 - 3)) ||
        isAfter(parseISO(start_date), setHours(startOfToday(), 18 - 3))
      ) {
        return res
          .status(400)
          .json({ error: 'start_date must be between 8am and 18pm' });
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
    }

    // 2 flow -> finish the delivery
    if (end_date) {
      // check if signature was send
      if (!signature_id) {
        return res
          .status(401)
          .json({ error: 'You need to inform the signature_id' });
      }

      const signature = await File.findByPk(signature_id);
      if (!signature) {
        return res.status(401).json({ error: 'signature not found' });
      }
    }

    await order.update({ start_date, end_date, signature_id });
    return res.json({});
  }
}

export default new DeliverymanOrdersController();
