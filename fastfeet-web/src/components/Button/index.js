/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { func, any } from 'prop-types';

import { Container } from './styles';

export default function Button({ children, onClick, Icon, ...props }) {
  return (
    <Container type="button" onClick={onClick} {...props}>
      {Icon && <Icon color="#fff" size={18} />}
      {children}
    </Container>
  );
}

Button.defaultProps = {
  onClick: null,
  Icon: null
};

Button.propTypes = {
  onClick: func,
  children: any.isRequired,
  Icon: func
};
