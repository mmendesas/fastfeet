import React from 'react';
import { string } from 'prop-types';

import { statusColors } from '../../styles/colors';
import { Container, Dot } from './styles';

export default function Badge({ type }) {
  const { bgColor, color } = statusColors[type];

  return (
    <Container bgColor={bgColor} color={color}>
      <Dot color={color} />
      {type}
    </Container>
  );
}

Badge.propTypes = {
  type: string.isRequired
};
