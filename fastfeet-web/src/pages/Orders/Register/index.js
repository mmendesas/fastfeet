import * as Yup from 'yup';
import React, { useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import { shape, string } from 'prop-types';
import { MdCheck } from 'react-icons/md';
import { Form } from '@unform/web';

import Button from '../../../components/Button';
import BackButton from '../../../components/BackButton';
import Input from '../../../components/Input';
import Select from '../../../components/Select';

import api from '../../../services/api';
import history from '../../../services/history';

import { Container, Content, Title, FormContent } from './styles';

export default function DeliverymanRegister({ match }) {
  const formRef = useRef(null);
  const { id } = match.params; // enable edit
  const title = id ? 'Edição' : 'Cadastro';

  useEffect(() => {
    async function loadData() {
      if (id) {
        const response = await api.get(`/orders/${id}`);
        const { product } = response.data;

        formRef.current.setData({ product });
      }
    }
    loadData();
  }, [id]);

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        deliveryman: Yup.string().required('Entregador é um campo obrigatório'),
        recipient: Yup.string().required('Destinatário é um campo obrigatório'),
        product: Yup.string().required('Produto é um campo obrigatório')
      });

      await schema.validate(data, { abortEarly: false });

      const dataToSend = {
        product: data.product,
        recipient_id: data.recipient.value,
        deliveryman_id: data.deliveryman.value
      };

      if (id) {
        await api.put(`/orders/${id}`, dataToSend);
      } else {
        await api.post('orders', dataToSend);
      }
      const msg = id ? 'editada' : 'criada';
      toast.success(`Encomenda ${msg} com sucesso!`);
      history.goBack();
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      }
    }
  }

  async function loadRecipients(inputValue, callback) {
    const response = await api.get('recipients', { params: { q: inputValue } });
    const data = response.data.map(({ id: value, name: label }) => ({
      value,
      label
    }));
    callback(data);
  }

  async function loadDeliveryman(inputValue, callback) {
    const response = await api.get('deliveryman', {
      params: { q: inputValue }
    });
    const data = response.data.map(({ id: value, name: label }) => ({
      value,
      label
    }));
    callback(data);
  }

  return (
    <Container>
      <Content>
        <section>
          <Title>{title} de encomendas</Title>
          <div>
            <BackButton />
            <Button Icon={MdCheck} type="submit" form="myform">
              Salvar
            </Button>
          </div>
        </section>

        <Form id="myform" ref={formRef} onSubmit={handleSubmit}>
          <FormContent>
            <Select
              name="recipient"
              label="Destinatários"
              loadOptions={loadRecipients}
            />
            <Select
              name="deliveryman"
              label="Entregador"
              loadOptions={loadDeliveryman}
            />
          </FormContent>

          <Input name="product" label="Nome do produto:" placeholder="nome" />
        </Form>
      </Content>
    </Container>
  );
}

DeliverymanRegister.propTypes = {
  match: shape({
    params: shape({
      id: string
    }).isRequired
  }).isRequired
};
