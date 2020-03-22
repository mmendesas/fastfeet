import * as Yup from 'yup';
import { Op } from 'sequelize';

import Recipient from '../models/Recipient';

class RecipientController {
  async index(req, res) {
    const { q: query } = req.query;

    const defaultOptions = {
      attributes: [
        'id',
        'name',
        'street',
        'number',
        'complement',
        'state',
        'city',
        'zipcode',
      ],
    };

    const optionsWithQuery = {
      where: {
        name: {
          [Op.iLike]: `%${query}%`,
        },
      },
      ...defaultOptions,
    };

    const options = query ? optionsWithQuery : defaultOptions;

    const recipients = await Recipient.findAll(options);

    return res.json(recipients);
  }

  async indexBy(req, res) {
    const recipient = await Recipient.findByPk(req.params.id, {
      attributes: [
        'id',
        'name',
        'street',
        'number',
        'complement',
        'state',
        'city',
        'zipcode',
      ],
    });

    return res.json(recipient);
  }

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

  async update(req, res) {
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

    const { name } = req.body;
    const recipient = await Recipient.findOne({ where: { name } });
    if (!recipient) {
      return res.status(401).json({ error: 'recipient not found' });
    }

    const {
      id,
      street,
      number,
      complement,
      state,
      city,
      zipcode,
    } = await recipient.update(req.body);

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

  async delete(req, res) {
    const recipient = await Recipient.findByPk(req.params.id);
    if (!recipient) {
      res.status(400).json({ error: 'Recipient not found' });
    }

    recipient.destroy();
    res.json();
  }
}

export default new RecipientController();
