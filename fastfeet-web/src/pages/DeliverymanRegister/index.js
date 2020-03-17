import React from 'react';
import { MdCheck, MdChevronLeft } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import AvatarInput from '../../components/AvatarInput';
import Button from '../../components/Button';
import history from '../../services/history';

import { Container, Content, Title } from './styles';

export default function DeliverymanRegister() {
  function handleSubmit(data) {
    console.log('register data', data);
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
            <Button onClick={() => {}}>
              <MdCheck color="#FFF" size={22} />
              Salvar
            </Button>
          </div>
        </section>

        <Form onSubmit={handleSubmit}>
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
