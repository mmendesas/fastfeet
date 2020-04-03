import React from 'react';
import { string, bool } from 'prop-types';

import { Container, Label, Value } from './styles';

export default function TextLabel({ label, value, big }) {
  return (
    <Container>
      <Label big={big}>{label}</Label>
      <Value big={big}>{value}</Value>
    </Container>
  );
}

TextLabel.defaultProps = {
  big: false,
};

TextLabel.propTypes = {
  label: string.isRequired,
  value: string.isRequired,
  big: bool,
};
