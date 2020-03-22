import Mail from '../../lib/Mail';

class CancelOrderMail {
  get key() {
    return 'CancelOrderMail';
  }

  async handle({ data }) {
    const { deliveryman, recipient, product } = data;
    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Encomenda cancelada',
      template: 'cancelorder',
      context: {
        deliveryman: deliveryman.name,
        user: recipient.name,
        city: `${recipient.city} [${recipient.state}]`,
        product,
      },
    });
  }
}

export default new CancelOrderMail();
