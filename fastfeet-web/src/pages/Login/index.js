import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/fastfeet-logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória')
});

export default function Login() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="Fastfeet" width="250px" height="40px" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <label htmlFor="email">
          SEU E-MAIL
          <Input
            name="email"
            id="email"
            type="email"
            placeholder="exemplo@email.com"
          />
        </label>

        <label htmlFor="password">
          SUA SENHA
          <Input
            name="password"
            id="password"
            type="password"
            placeholder="*********"
          />
        </label>

        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}
