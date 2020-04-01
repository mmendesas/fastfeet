import React from 'react';

import { Container, Label, Value } from './styles';

export default function TextLabel({ label, value }) {
  return (
    <Container>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </Container>
  );
}
