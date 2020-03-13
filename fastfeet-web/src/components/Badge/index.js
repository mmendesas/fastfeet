import React from 'react';
import { element, string, oneOf } from 'prop-types';

import { red, yellow, blue, green } from '../../styles/colors';
import { Container, Dot } from './styles';

const statusColors = {
  cancelado: red,
  pendente: yellow,
  retirada: blue,
  entregue: green
};

export default function Badge({ type, children }) {
  return (
    <Container color={statusColors[type]}>
      <Dot color={statusColors[type]} />
      {children}
    </Container>
  );
}

Badge.propTypes = {
  type: string.isRequired,
  children: oneOf(element, string).isRequired
};
