/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { func, any } from 'prop-types';

import { Container } from './styles';

export default function Button({ children, onClick, ...props }) {
  return (
    <Container onClick={onClick} {...props}>
      {children}
    </Container>
  );
}

Button.propTypes = {
  onClick: func.isRequired,
  children: any.isRequired
};
