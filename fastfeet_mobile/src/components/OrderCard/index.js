import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Header, Title, Details } from './styles';

import Timeline from '~/components/Timeline';
import TextLabel from '~/components/TextLabel';
import TextLink from '~/components/TextLink';

export default function OrderCard() {
  return (
    <Container>
      <Header>
        <Icon name="local-shipping" size={32} color="#008080" />
        <Title> Encomenda 01</Title>
      </Header>
      <Timeline status="aguardando" />
      <Details>
        <TextLabel label="Data" value="15/01/2020" />
        <TextLabel label="Cidade" value="Osasco" />
        <TextLink active onPress={() => {}}>
          Ver Detalhes
        </TextLink>
      </Details>
    </Container>
  );
}
