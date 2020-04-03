/* eslint-disable camelcase */
import React from 'react';
import { shape, string, date, number, object } from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import { format, parseISO } from 'date-fns';

import { Container, Header, Title, Details } from './styles';

import Timeline from '~/components/Timeline';
import TextLabel from '~/components/TextLabel';
import TextLink from '~/components/TextLink';

export default function OrderCard({ data }) {
  const { navigate } = useNavigation();
  const { id, start_date, end_date, recipient, status } = data;
  const { city } = recipient;

  const dateToUse = end_date || start_date;
  const usedDate = start_date
    ? format(parseISO(dateToUse), 'dd/MM/yyyy')
    : '--/--/--';

  function handleDetailsClick(order) {
    navigate('Details', { order_id: order });
  }

  return (
    <Container>
      <Header>
        <Icon name="local-shipping" size={32} color="#008080" />
        <Title> Encomenda {`${String(id).padStart(2, '0')}`}</Title>
      </Header>
      <Timeline status={status} />
      <Details>
        <TextLabel label="Data" value={usedDate} />
        <TextLabel label="Cidade" value={city} />
        <TextLink active onPress={() => handleDetailsClick(id)}>
          Ver Detalhes
        </TextLink>
      </Details>
    </Container>
  );
}

OrderCard.propTypes = {
  data: shape({
    id: number.isRequired,
    start_date: date,
    end_date: date,
    recipient: object,
    status: string,
  }).isRequired,
};
