import React from 'react';

import { Container, Line, Content, Step, Bullet, Title } from './styles';

export default function Timeline({ status }) {
  return (
    <Container>
      <Line />
      <Content>
        <Step>
          <Bullet fill />
          <Title>Aguardando retirada</Title>
        </Step>
        <Step>
          <Bullet fill={['retirada', 'entregue'].includes(status)} />
          <Title>Retirada</Title>
        </Step>
        <Step>
          <Bullet fill={status === 'entregue'} />
          <Title>Entregue</Title>
        </Step>
      </Content>
    </Container>
  );
}
