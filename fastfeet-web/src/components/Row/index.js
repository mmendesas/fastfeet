/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { oneOfType, element, string, any } from 'prop-types';

import { Container } from './styles';

export default function Row({ children, ...props }) {
  return (
    <Container className="row" {...props}>
      {children}
    </Container>
  );
}

Row.propTypes = {
  children: oneOfType([element, string, any]).isRequired
};

Row.displayName = 'Row';
