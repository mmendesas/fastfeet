import React, { useRef, useEffect } from 'react';
import { shape, string } from 'prop-types';
import { useDispatch } from 'react-redux';
import { MdCheck, MdChevronLeft } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import { createDeliverymanRequest } from '../../../store/modules/deliveryman/actions';

import AvatarInput from '../../../components/AvatarInput';
import Button from '../../../components/Button';

import history from '../../../services/history';
import api from '../../../services/api';

import { Container, Content, Title } from './styles';

export default function DeliverymanRegister({ match }) {
  const { id } = match.params; // enable edit
  const formRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadData() {
      if (id) {
        const response = await api.get(`/deliveryman/${id}`);

        formRef.current.setData(response.data);
        formRef.current.setFieldValue('avatar', response?.data?.avatar?.url);
      }
    }
    loadData();
  }, [id]);

  function handleSubmit(data) {
    dispatch(createDeliverymanRequest(data));
  }

  return (
    <Container>
      <Content>
        <section>
          <Title>Cadastro de Entregadores</Title>
          <div>
            <Button
              onClick={() => {
                history.push('/deliveryman');
              }}
              disabled
            >
              <MdChevronLeft color="#FFF" size={22} />
              Voltar
            </Button>
            <Button type="submit" form="form">
              <MdCheck color="#FFF" size={22} />
              Salvar
            </Button>
          </div>
        </section>

        <Form id="form" ref={formRef} onSubmit={handleSubmit}>
          <AvatarInput name="avatar_id" />

          <label htmlFor="name">
            Name:
            <Input name="name" placeholder="Nome do entregador" />{' '}
          </label>

          <label htmlFor="email">
            Email:
            <Input name="email" placeholder="example@mail.com" />{' '}
          </label>
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
