import React from 'react';
import { string } from 'prop-types';

import { Container, Initials, MText } from './styles';

export default function NameInitials({ name = '' }) {
  const [first = '', last = ''] = name.split(' ');
  const initials = first.charAt(0) + last.charAt(0);
  const color = '#0aa';

  return (
    <Container>
      <Initials color={color}>
        <MText color={color}>{initials}</MText>
      </Initials>
    </Container>
  );
}

NameInitials.propTypes = {
  name: string.isRequired,
};
