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
}

export default new DeliverymanOrdersController();
