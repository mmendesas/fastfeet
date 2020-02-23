import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    // validate paylooad against schema
    const schema = Yup.object({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.string().required(),
      complement: Yup.string().required(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zipcode: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'recipient validation fails' });
    }

    // check if user already exists
    const { name, zipcode } = req.body;
    const recipientExists = await Recipient.findOne({
      where: { name, zipcode },
    });
    if (recipientExists) {
      return res.status(401).json({ error: 'recipient already exists' });
    }

    const recipient = await Recipient.create(req.body);

    const { id, street, number, complement, state, city } = recipient;

    return res.json({
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      zipcode,
    });
  }
}

export default new RecipientController();
