/* eslint-disable camelcase */
import React from 'react';
import { Text } from 'react-native';
import { shape, number } from 'prop-types';

import { Container } from './styles';

export default function Details({ route }) {
  const { order_id } = route.params;

  return (
    <Container>
      <Text>Details Page {order_id}</Text>
    </Container>
  );
}

Details.propTypes = {
  route: shape({
    params: shape({
      order_id: number.isRequired,
    }).isRequired,
  }).isRequired,
};
