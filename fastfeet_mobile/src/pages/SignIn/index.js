import React from 'react';
import { Image } from 'react-native';

import { Container, Form, FormInput, SubmitButton } from './styles';

import logo from '~/assets/fastfeet-logo.png';

export default function SignIn() {
  function handleSubmit() {}

  return (
    <Container>
      <Image source={logo} />
      <Form>
        <FormInput
          keyboardType="number-pad"
          placeholder="Informe seu ID de cadastro"
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
        />

        <SubmitButton onPress={handleSubmit}>Entrar no sistema</SubmitButton>
      </Form>
    </Container>
  );
}
