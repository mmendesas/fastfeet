import React from 'react';

import { Container, Dot } from './styles';

export default function Badge({ color, children }) {
  return (
    <Container>
      <Dot color />
      {children}
    </Container>
  );
}
