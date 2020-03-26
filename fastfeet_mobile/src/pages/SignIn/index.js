import React from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

import Input from '~/components/Input';
import Button from '~/components/Button';

export default function SignIn() {
  return (
    <Container>
      <Text>SignIn</Text>

      <Input style={{ marginTop: 30 }} icon="call" placeholder="Digite " />
      <Button>Entrar</Button>
    </Container>
  );
}
