import * as Yup from 'yup';
import React, { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { shape, string } from 'prop-types';
import { MdCheck } from 'react-icons/md';

import Row from '../../../components/Row';
import Button from '../../../components/Button';
import BackButton from '../../../components/BackButton';
import Input from '../../../components/Input';

import api from '../../../services/api';

import { Container, Content, Title, UnForm as Form } from './styles';

export default function RecipientsRegister({ match }) {
  const formRef = useRef(null);
  const { id } = match.params; // enable edit
  const title = id ? 'Edição' : 'Cadastro';

  useEffect(() => {
    async function loadData() {
      if (id) {
        const response = await api.get(`/recipients/${id}`);
        formRef.current.setData(response.data);
      }
    }
    loadData();
  }, [id]);

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required(''),
        street: Yup.string().required(),
        number: Yup.number().required(),
        complement: Yup.number().required(),
        city: Yup.string().required(),
        state: Yup.string().required(),
        zipcode: Yup.number().required()
      });

      await schema.validate(data, { abortEarly: false });

      if (id) {
        await api.put(`recipients/${id}`, data);
      } else {
        await api.post('recipients', data);
      }
      const msg = id ? 'editado' : 'criado';
      toast.success(`Destinatário ${msg} com sucesso!`);
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
          <Title>{title} de Destinatário</Title>
          <div>
            <BackButton />
            <Button Icon={MdCheck} type="submit" form="myform">
              Salvar
            </Button>
          </div>
        </section>

        <Form id="myform" ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" label="Nome" placeholder="Nome do entregador" />
          <Row>
            <Input
              name="street"
              label="Rua"
              placeholder="Digite o nome da rua"
            />
            <Input
              type="number"
              name="number"
              label="Numero"
              placeholder="Digite o numero"
            />
            <Input name="complement" label="Complemento" />
          </Row>
          <Row>
            <Input name="city" label="Cidade" placeholder="Cidade" />
            <Input name="state" label="Estado" placeholder="Estado" />
            <Input name="zipcode" label="CEP" />
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
