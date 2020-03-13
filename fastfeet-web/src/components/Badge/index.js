import React from 'react';
import { element, string, oneOf } from 'prop-types';

import { Container, Dot } from './styles';

const colors = {
  cancelado: '#f00',
  pendente: '#bf9a04',
  retirada: '#003fcc',
  entregue: '#396745'
};

export default function Badge({ type, children }) {
  return (
    <Container color={colors[type]}>
      <Dot color={colors[type]} />
      {children}
    </Container>
  );
}

Badge.propTypes = {
  type: string.isRequired,
  children: oneOf(element, string).isRequired
};
