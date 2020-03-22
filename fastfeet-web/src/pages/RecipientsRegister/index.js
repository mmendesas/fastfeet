import React from 'react';
import { MdCheck, MdChevronLeft } from 'react-icons/md';
import { Form } from '@unform/core';

import Row from '../../components/Row';
import Button from '../../components/Button';
import Input from '../../components/Input';

import history from '../../services/history';

import { Container, Content, Title } from './styles';

export default function RecipientsRegister() {
  function handleSubmit(data) {
    console.log('register data', data);
  }

  return (
    <Container>
      <Content>
        <section>
          <Title>Cadastro de Destinatário</Title>
          <div>
            <Button
              onClick={() => {
                history.push('/recipients');
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
          <label htmlFor="name">
            Nome
            <Input name="name" placeholder="Nome do entregador" />{' '}
          </label>

          <Row>
            <label htmlFor="rua">
              Rua
              <Input name="rua" placeholder="Digite o nome da rua" />{' '}
            </label>

            <label htmlFor="numero">
              Numero
              <Input name="numero" placeholder="Digite o numero" />{' '}
            </label>

            <label htmlFor="complemento">
              Complemento
              <Input name="complemento" />{' '}
            </label>
          </Row>

          <Row>
            <label htmlFor="cidade">
              Cidade
              <Input name="cidade" placeholder="Cidade" />{' '}
            </label>

            <label htmlFor="estado">
              Estado
              <Input name="estado" placeholder="Estado" />{' '}
            </label>

            <label htmlFor="CEP">
              CEP
              <Input name="CEP" />{' '}
            </label>
          </Row>
        </Form>
      </Content>
    </Container>
  );
}
