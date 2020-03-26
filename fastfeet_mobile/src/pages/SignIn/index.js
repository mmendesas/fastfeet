import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Image } from 'react-native';
import { Form } from '@unform/mobile';

import logo from '~/assets/fastfeet-logo.png';
import { Container, Content, FormInput, SubmitButton } from './styles';

import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const formRef = useRef(null);
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit(data) {
    dispatch(signInRequest(data.user_id));
  }

  return (
    <Container>
      <Image source={logo} />
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <FormInput
            name="user_id"
            keyboardType="number-pad"
            placeholder="Informe seu ID de cadastro"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton
            onPress={() => formRef.current.submitForm()}
            loading={loading}
          >
            Entrar no sistema
          </SubmitButton>
        </Form>
      </Content>
    </Container>
  );
}
