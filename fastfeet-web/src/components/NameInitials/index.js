import React from 'react';
import { string, bool } from 'prop-types';

import { nameColors } from '../../styles/colors';
import { Container, Initials, Name } from './styles';

export default function NameInitials({ name = '', showName }) {
  const [first = '', last = ''] = name.split(' ');
  const initials = first.charAt(0) + last.charAt(0);

  const index = Math.floor(Math.random() * nameColors.length);
  const { bgColor, color } = nameColors[index];

  return (
    <Container>
      <Initials bgColor={bgColor} color={color}>
        {initials}
      </Initials>
      {showName && <Name>{name}</Name>}
    </Container>
  );
}

NameInitials.defaultProps = {
  showName: true
};

NameInitials.propTypes = {
  showName: bool,
  name: string.isRequired
};
