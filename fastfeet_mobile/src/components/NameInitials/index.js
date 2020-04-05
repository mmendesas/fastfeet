import React from 'react';
import { string, bool } from 'prop-types';

import { Container, Initials, MText } from './styles';

export default function NameInitials({ name = '', big }) {
  const [first = '', last = ''] = name.split(' ');
  const initials = first.charAt(0) + last.charAt(0);
  const color = '#0aa';

  return (
    <Container>
      <Initials color={color} big={big}>
        <MText color={color} big={big}>
          {initials}
        </MText>
      </Initials>
    </Container>
  );
}

NameInitials.defaultProps = {
  big: false,
  name: '',
};

NameInitials.propTypes = {
  name: string,
  big: bool,
};
