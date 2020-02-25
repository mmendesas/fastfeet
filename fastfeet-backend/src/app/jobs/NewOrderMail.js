import Mail from '../../lib/Mail';

class NewOrderMail {
  get key() {
    return 'NewOrderMail';
  }

  async handle({ data }) {
    const { deliveryman, recipient, product } = data;
    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Nova encomenda',
      template: 'neworder',
      context: {
        deliveryman: deliveryman.name,
        user: recipient.name,
        city: `${recipient.city} [${recipient.state}]`,
        product,
      },
    });
  }
}

export default new NewOrderMail();
