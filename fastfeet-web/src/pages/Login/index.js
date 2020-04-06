/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@unform/core';
import * as Yup from 'yup';

import logo from '../../assets/fastfeet-logo.svg';
import { signInRequest } from '../../store/modules/auth/actions';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, FormContent } from './styles';

export default function Login() {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email()
          .required('O email é obrigatório'),
        password: Yup.string().required('A senha é obrigatória')
      });

      await schema.validate(data, { abortEarly: false });
      const { email, password } = data;
      dispatch(signInRequest(email, password));
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
      <img src={logo} alt="Fastfeet" width="250px" height="40px" />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <FormContent>
          <Input
            type="email"
            name="email"
            id="email"
            label="SEU EMAIL"
            placeholder="example@mail.com"
          />
          <Input
            type="password"
            name="password"
            id="password"
            label="SUA SENHA"
            placeholder="*********"
          />
          <Button type="submit" onClick={() => formRef.current.submitForm()}>
            {loading ? 'Carregando...' : 'Entrar no sistema'}
          </Button>
        </FormContent>
      </Form>
    </Container>
  );
}
