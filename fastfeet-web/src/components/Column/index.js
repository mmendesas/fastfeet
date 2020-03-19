/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { oneOfType, element, string } from 'prop-types';

import { Container } from './styles';

export default function Column({ children, ...props }) {
  return (
    <Container className="column" {...props}>
      {children}
    </Container>
  );
}

Column.propTypes = {
  children: oneOfType([element, string]).isRequired
};

Column.displayName = 'Column';
