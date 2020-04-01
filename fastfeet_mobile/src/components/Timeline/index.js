import React from 'react';

import { Container, Line, Content, Step, Bullet, Title } from './styles';

export default function Timeline() {
  return (
    <Container>
      <Line />

      <Content>
        <Step>
          <Bullet fill />
          <Title>Aguardando retirada</Title>
        </Step>
        <Step>
          <Bullet />
          <Title>Retirada</Title>
        </Step>
        <Step>
          <Bullet />
          <Title>Entregue</Title>
        </Step>
      </Content>
    </Container>
  );
}
