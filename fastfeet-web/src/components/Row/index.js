/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { oneOf, element, string } from 'prop-types';

import { Container } from './styles';

export default function Row({ children, ...props }) {
  return (
    <Container className="row" {...props}>
      {children}
    </Container>
  );
}

Row.propTypes = {
  children: oneOf(element, string).isRequired
};

Row.displayName = 'Row';
