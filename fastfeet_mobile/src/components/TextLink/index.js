import React from 'react';
import { bool, func, string } from 'prop-types';

import { Container, MText } from './styles';

export default function TextLink({ active, border, onPress, children }) {
  return (
    <Container active={active} border={border} onPress={onPress}>
      <MText active={active}>{children}</MText>
    </Container>
  );
}

TextLink.propTypes = {
  border: bool,
  active: bool,
  onPress: func,
  children: string.isRequired,
};

TextLink.defaultProps = {
  active: false,
  border: false,
  onPress: null,
};
