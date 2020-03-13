import React from 'react';
import { string } from 'prop-types';

import { red, yellow, blue, green } from '../../styles/colors';
import { Container, Initials, Name } from './styles';

const colors = [red, yellow, blue, green];

export default function NameInitials({ name = '' }) {
  const [first = '', last = ''] = name.split(' ');
  const initials = first.charAt(0) + last.charAt(0);

  const index = Math.floor(Math.random() * colors.length);
  const color = colors[index];

  return (
    <Container color={color}>
      <Initials color={color}>{initials}</Initials>
      <Name>{name}</Name>
    </Container>
  );
}

NameInitials.propTypes = {
  name: string.isRequired
};
