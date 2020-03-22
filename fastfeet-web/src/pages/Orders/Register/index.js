import * as Yup from 'yup';
import React, { useRef, useEffect } from 'react';
import { shape, string } from 'prop-types';
import { useDispatch } from 'react-redux';
import { MdCheck } from 'react-icons/md';
import { Form } from '@unform/web';

import { createDeliverymanRequest } from '../../../store/modules/deliveryman/actions';

import Button from '../../../components/Button';
import BackButton from '../../../components/BackButton';
import Input from '../../../components/Input';

import api from '../../../services/api';

import { Container, Content, Title } from './styles';

export default function DeliverymanRegister({ match }) {
  const formRef = useRef(null);
  const dispatch = useDispatch();
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
        email: Yup.string()
          .email()
          .required(),
        name: Yup.string().required()
      });

      await schema.validate(data, { abortEarly: false });

      dispatch(createDeliverymanRequest(data));
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
