import React, { useEffect } from 'react';
import { shape, string } from 'prop-types';
import { MdCheck } from 'react-icons/md';

import Row from '../../../components/Row';
import Button from '../../../components/Button';
import BackButton from '../../../components/BackButton';
import Input from '../../../components/Input';

import api from '../../../services/api';

import { Container, Content, Title, UnForm as Form } from './styles';

export default function RecipientsRegister({ match }) {
  const { id } = match.params; // enable edit

  useEffect(() => {
    async function loadData() {
      if (id) {
        const response = await api.get(`/recipients/${id}`);
        const { name, street, number, complement } = response.data;
      }
      loadData();
    }
  }, [id]);

  function handleSubmit(data) {
    console.log('register data', data);
  }

  return (
    <Container>
      <Content>
        <section>
          <Title>Cadastro de Destinatário</Title>
          <div>
            <BackButton />
            <Button Icon={MdCheck} type="submit" form="myform">
              Salvar
            </Button>
          </div>
        </section>

        <Form id="myform" onSubmit={handleSubmit}>
          <Input name="name" label="Nome" placeholder="Nome do entregador" />
          <Row>
            <Input name="rua" label="Rua" placeholder="Digite o nome da rua" />
            <Input name="numero" label="Numero" placeholder="Digite o numero" />
            <Input name="complemento" label="Complemento" />
          </Row>
          <Row>
            <Input name="cidade" label="Cidade" placeholder="Cidade" />
            <Input name="estado" label="Estado" placeholder="Estado" />
            <Input name="CEP" label="CEP" />
          </Row>
        </Form>
      </Content>
    </Container>
  );
}

RecipientsRegister.propTypes = {
  match: shape({
    params: shape({
      id: string
    }).isRequired
  }).isRequired
};
